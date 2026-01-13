import axios from 'axios';
import FormData from 'form-data';

const env = (typeof process !== "undefined" && process.env) ? process.env : {};
const PDF_API_BASE = (
  env.PDF_API_BASE_URL ||
  env.PDF_CONVERTER_API_BASE_URL ||
  'https://api.pdfswifter.com'
).replace(/\/$/, '');

export async function process(files, options = {}) {
  if (!files || files.length === 0) {
    throw new Error('compress-pdf: no files provided');
  }

  const file = files[0];
  const originalName = file.name || 'input.pdf';
  if (!/\.pdf$/i.test(originalName) && !(file.type && file.type.includes('pdf'))) {
    throw new Error('compress-pdf: only PDF files are supported');
  }

  const form = new FormData();
  form.append('file', file.buffer, { filename: originalName, contentType: file.type || 'application/pdf' });

  const response = await axios.post(
    `${PDF_API_BASE}/pdf/compress`,
    form,
    {
      responseType: 'arraybuffer',
      headers: form.getHeaders(),
      timeout: 60000,
    }
  );

  const contentType = response.headers['content-type'] || 'application/pdf';
  if (contentType.includes('application/json') || contentType.startsWith('text/')) {
    const text = Buffer.from(response.data).toString('utf8');
    throw new Error(text || 'Compression failed');
  }
  const disposition = response.headers['content-disposition'] || '';
  const filenameMatch = disposition.match(/filename=\"?([^\";]+)\"?/i);
  const filename = filenameMatch ? filenameMatch[1] : originalName.replace(/\.pdf$/i, '') + '-compressed.pdf';

  return {
    download: true,
    filename,
    buffer: Buffer.from(response.data),
    contentType,
  };
}
