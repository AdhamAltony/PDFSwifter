import ToolsPageView from "@/features/tools/ui/ToolsPageView";
import { getAllowedToolKeys } from "@/lib/tools/tools-policy";

export const metadata = {
    title: "All tools | pdfSwiffter",
    description:
        "Browse every pdfSwiffter tool by tier and category. Convert, compress, rotate, and download with a clean workflow.",
};
export const dynamic = "force-dynamic";

export default async function ToolsPage() {
    const allowedToolKeys = await getAllowedToolKeys();
    return <ToolsPageView allowedToolKeys={allowedToolKeys} />;
}
