import {
	ArrowDownOnSquareStackIcon,
	ScissorsIcon,
	ArrowsPointingInIcon,
	DocumentTextIcon,
	PhotoIcon,
	LockOpenIcon,
	LockClosedIcon,
	DocumentPlusIcon,
	DocumentMinusIcon,
	ArrowPathRoundedSquareIcon,
	PaintBrushIcon,
	HashtagIcon,
	Squares2X2Icon,
	PencilSquareIcon,
	RectangleGroupIcon,
} from '@heroicons/react/24/outline';


const YouTubeIcon = ( props ) => (
	<svg
		{ ...props }
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={ 2 }
		stroke="currentColor"
		className={ props?.className || "w-6 h-6" }
	>
		<rect x="2" y="5" width="20" height="14" rx="4" ry="4" stroke="currentColor" strokeWidth={ 2 } fill="currentColor" />
		<path d="M10 8l6 4-6 4V8z" fill="#111827" />
	</svg>
);

const TikTokIcon = ( props ) => (
	<svg
		{ ...props }
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={ 2 }
		stroke="currentColor"
		className={ props?.className || "w-6 h-6" }
	>
		<path
			d="M9 12a4 4 0 1 0 4 4V8a5 5 0 0 0 5-5"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const InstagramIcon = ( props ) => (
	<svg
		{ ...props }
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={ 2 }
		stroke="currentColor"
		className={ props?.className || "w-6 h-6" }
	>
		<rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
		<circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
		<circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
	</svg>
);

const AVAILABLE_TOOL_HREFS = new Set( [
	'/utilities/compress-pdf',
	'/utilities/rotate-pdf',
	'/utilities/pdf-to-word',
	'/utilities/pdf-to-excel',
	'/utilities/pdf-to-jpg',
	'/utilities/tiktok-download',
	'/utilities/instagram-download',
] );

const PREMIUM_TOOL_HREFS = new Set( [] );

const FEATURED_TOOL_HREFS = new Set( [
	'/utilities/tiktok-download',
	'/utilities/instagram-download',
] );

const tools = [
	{
		icon: ArrowDownOnSquareStackIcon,
		title: 'Merge PDF',
		description: 'Combine multiple PDFs into one.',
		href: '/utilities/merge-pdf',
		color: 'merge',
	},
	{
		icon: ScissorsIcon,
		title: 'Split PDF',
		description: 'Split a PDF into separate files or ranges.',
		href: '/utilities/split-pdf',
		color: 'split',
	},
	{
		icon: ArrowsPointingInIcon,
		title: 'Compress PDF',
		description: 'Compress PDF files online for free and reduce file size without losing quality — perfect for sharing or uploading large documents.',
		shortDescription: 'Reduce file size without losing quality.',
		href: '/utilities/compress-pdf',
		color: 'compress',
		keywords: ['how to compress pdf files online for free', 'reduce pdf file size without losing quality', 'online pdf compressor for large documents'],
		metaDescription: 'Compress PDF files online for free and reduce file size without losing quality. Perfect for sharing or uploading large documents.',
	},
	{
		icon: DocumentTextIcon,
		title: 'PDF to Word',
		description: 'Convert PDF files to editable Word documents online for free — keep your formatting intact and edit easily.',
		shortDescription: 'Convert PDFs to editable DOCX.',
		href: '/utilities/pdf-to-word',
		color: 'word',
		keywords: ['convert pdf to word online free', 'pdf to editable word document converter', 'best online pdf to word converter'],
		metaDescription: 'Convert PDF files to editable Word documents online for free. Keep your formatting intact and edit easily.',
	},
	{
		icon: DocumentTextIcon,
		title: 'Word to PDF',
		description: 'Convert DOCX to PDF.',
		href: '/utilities/word-to-pdf',
		color: 'word',
	},
	{
		icon: RectangleGroupIcon,
		title: 'PDF to Excel',
		description: 'Convert PDF tables to Excel spreadsheets online — quickly extract data from PDFs for easy editing and analysis.',
		shortDescription: 'Extract tables to XLSX.',
		href: '/utilities/pdf-to-excel',
		color: 'excel',
		keywords: ['convert pdf to excel online free', 'pdf to excel spreadsheet converter', 'extract tables from pdf to excel'],
		metaDescription: 'Convert PDF tables to Excel spreadsheets online. Quickly extract data from PDFs for easy editing and analysis.',
	},
	{
		icon: PhotoIcon,
		title: 'PDF to JPG',
		description: 'Transform PDF pages into high-quality JPG images online — perfect for presentations, sharing, or printing.',
		shortDescription: 'Export PDF pages as images.',
		href: '/utilities/pdf-to-jpg',
		color: 'utility',
		keywords: ['convert pdf pages to jpg images online', 'pdf to image converter free', 'best pdf to jpg online tool'],
		metaDescription: 'Transform PDF pages into high-quality JPG images online. Perfect for presentations, sharing, or printing.',
	},
	{
		icon: PhotoIcon,
		title: 'JPG to PDF',
		description: 'Convert images into a single PDF.',
		href: '/utilities/jpg-to-pdf',
		color: 'utility',
	},
	{
		icon: LockOpenIcon,
		title: 'Unlock PDF',
		description: 'Remove open password (for files you own).',
		href: '/utilities/unlock-pdf',
		color: 'utility',
	},
	{
		icon: LockClosedIcon,
		title: 'Protect PDF',
		description: 'Add password encryption and permissions.',
		href: '/utilities/protect-pdf',
		color: 'edit',
	},
	{
		icon: DocumentPlusIcon,
		title: 'Extract pages',
		description: 'Extract selected pages to a new PDF.',
		href: '/utilities/extract-pages',
		color: 'edit',
	},
	{
		icon: DocumentMinusIcon,
		title: 'Remove pages',
		description: 'Delete specific pages from a PDF.',
		href: '/utilities/remove-pages',
		color: 'edit',
	},
	{
		icon: ArrowPathRoundedSquareIcon,
		title: 'Rotate PDF',
		description: 'Rotate PDF pages online for free — easily change orientation of any PDF document without installing software.',
		shortDescription: 'Rotate pages to the correct orientation.',
		href: '/utilities/rotate-pdf',
		color: 'edit',
		keywords: ['rotate pdf pages online free', 'change pdf orientation online', 'pdf page rotation tool'],
		metaDescription: 'Rotate PDF pages online for free. Easily change orientation of any PDF document without installing software.',
	},
	{
		icon: PaintBrushIcon,
		title: 'Add watermark',
		description: 'Overlay text or image watermarks.',
		href: '/utilities/add-watermark',
		color: 'edit',
	},
	{
		icon: HashtagIcon,
		title: 'Add page numbers',
		description: 'Insert page numbers into your PDF.',
		href: '/utilities/add-page-numbers',
		color: 'edit',
	},
	{
		icon: ArrowsPointingInIcon,
		title: 'Crop PDF',
		description: 'Trim margins and visible area.',
		href: '/utilities/crop-pdf',
		color: 'edit',
	},
	{
		icon: Squares2X2Icon,
		title: 'Organize PDF',
		description: 'Reorder, duplicate, or delete pages.',
		href: '/utilities/organize-pdf',
		color: 'edit',
	},
	{
		icon: PencilSquareIcon,
		title: 'Sign PDF',
		description: 'Draw, type, or upload a signature.',
		href: '/utilities/sign-pdf',
		color: 'edit',
	},
	{
		icon: TikTokIcon,
		title: 'Download TikTok Video',
		description: 'Download TikTok videos online without watermark for free — save your favorite clips instantly.',
		shortDescription: 'Download TikTok videos without watermark.',
		href: '/utilities/tiktok-download',
		color: 'download',
		inputType: 'url',
		keywords: ['download tiktok videos without watermark', 'save tiktok videos online free', 'tiktok video downloader online'],
		metaDescription: 'Download TikTok videos online without watermark for free. Save your favorite clips instantly.',
	},
	{
		icon: InstagramIcon,
		title: 'Download Instagram Video',
		description: 'Download Instagram videos and reels online for free — save posts instantly without any app installation.',
		shortDescription: 'Download Reels and videos from Instagram.',
		href: '/utilities/instagram-download',
		color: 'download',
		inputType: 'url',
		keywords: ['download instagram videos online free', 'save instagram reels and posts', 'instagram video downloader without app'],
		metaDescription: 'Download Instagram videos and reels online for free. Save posts instantly without any app installation.',
	}

];

const toolsWithTier = tools
	.filter( ( tool ) => AVAILABLE_TOOL_HREFS.has( tool.href ) )
	.map( ( tool ) => ( {
	...tool,
	key: tool.href.replace( '/utilities/', '' ),
	tier: 'freemium',
	featured: FEATURED_TOOL_HREFS.has( tool.href ),
} ) )
	.sort( ( a, b ) => Number( b.featured ) - Number( a.featured ) );

export default toolsWithTier;
export const ALL_TOOLS = toolsWithTier;
