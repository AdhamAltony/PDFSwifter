import ToolsPageView from "@/features/utilities/ui/ToolsPageView";
import { getAllowedToolKeys } from "@/lib/utilities/tools-policy";

export const metadata = {
  title: "All Free PDF Tools Online | pdfSwifter",
  description:
    "Browse all free online PDF tools — compress PDF, convert PDF to Word, Excel, JPG, rotate PDF pages, download TikTok and Instagram videos without watermark.",
  keywords:
    "free pdf tools, compress pdf online, pdf to word converter, pdf to excel, pdf to jpg, rotate pdf, tiktok video downloader, instagram video downloader",
};
export const dynamic = "force-dynamic";

export default async function UtilitiesPage() {
  const allowedToolKeys = await getAllowedToolKeys();
  return <ToolsPageView allowedToolKeys={allowedToolKeys} />;
}
