import axios from 'axios';
import FormData from 'form-data';

const PDF_API_BASE = (
  process.env.PDF_CONVERTER_API_BASE_URL ||
  process.env.PDF_API_BASE_URL ||
  'https://api.pdfswifter.com'
).replace(/\/$/, '');

export async function process ( files, options = {} ) {
  if ( !files || files.length === 0 )
  {
    throw new Error( 'No files provided' );
  }

  const file = files[ 0 ];
  const originalName = file.name || 'input.pdf';

  if ( !/\.pdf$/i.test( originalName ) && !( file.type && file.type.includes( 'pdf' ) ) )
  {
    throw new Error( 'Only PDF files are supported' );
  }

  const convertTo = options.convertTo || 'excel';

  const form = new FormData();
  form.append( 'file', file.buffer, { filename: originalName, contentType: file.type || 'application/pdf' } );

  const response = await axios.post(
    `${ PDF_API_BASE }/pdf/to-excel`,
    form,
    {
      responseType: 'arraybuffer',
      headers: form.getHeaders(),
      timeout: 60000,
    }
  );

  const contentType = response.headers[ 'content-type' ] || 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  const disposition = response.headers[ 'content-disposition' ] || '';
  const filenameMatch = disposition.match( /filename=\"?([^\";]+)\"?/i );
  const filename = filenameMatch ? filenameMatch[ 1 ] : originalName.replace( /\.pdf$/i, '' ) + '.xlsx';

  return {
    success: true,
    message: 'Conversion completed',
    download: true,
    filename,
    contentType,
    buffer: Buffer.from( response.data ),
  };
}
