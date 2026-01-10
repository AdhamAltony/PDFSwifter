export const blogPosts = [
  {
    slug: "designing-for-speed",
    title: "Designing for speed: Why tiny PDF tools win",
    summary:
      "We break every workflow down into a single focused action so the tool you need loads faster and behaves more reliably.",
    publishedAt: "2024-11-12",
    category: "Product & Design",
    author: "The pdfSwiffter Team",
    tags: ["speed", "ux"],
    content: [
      "Every millisecond counts when someone is waiting for a conversion or download. We invested early in splitting the product into focused tools so each one can be optimized independently for performance, accessibility, and reliability.",
      "That means smaller bundles, simpler state, and an onboarding experience that is entirely contextual to the task. No giant dashboards—just the exact inputs, progress indicators, and results you expect.",
      "We continue to split the work even further: while one tool handles uploads and conversions, another takes care of streaming the download. That separation keeps the experience predictable as the product scales."
    ]
  },
  {
    slug: "private-by-default",
    title: "Private by default: Keeping your PDFs safe",
    summary:
      "pdfSwiffter never keeps unnecessary copies of your data. We show what we touch and delete everything else right after the job finishes.",
    publishedAt: "2024-09-30",
    category: "Security",
    author: "Security & Ops",
    tags: ["security", "privacy"],
    content: [
      "Files are processed in memory whenever possible. Whenever temporary storage is required to support a download link, the data is kept on isolated workers and deleted within 30 minutes—long before typical retention windows.",
      "We do not keep file names or contents after a job completes, and we never share data with third parties unless you explicitly publish the result. Our privacy settings and telemetry are minimal by design because we believe trust comes from transparency.",
      "If you are working with highly sensitive files, we also provide the premium tier so nothing routes through 3rd-party ad networks and you can access priority support for compliance questions."
    ]
  },
  {
    slug: "premium-next-steps",
    title: "What premium subscribers get beyond fast conversions",
    summary:
      "The Premium plan is designed for people who rely on pdfSwiffter daily—unlimited runs, priority processing, and exclusive helpers.",
    publishedAt: "2024-08-05",
    category: "Business",
    author: "Growth & Partnerships",
    tags: ["premium", "upgrade"],
    content: [
      "Premium subscribers get unlimited access to every tool, unlimited file sizes up to 500 MB, and no interruptions from ads. We prioritize premium jobs so they finish faster even during peak traffic.",
      "You also unlock advanced helpers like watermarks, page numbering, and organization workflows that are only available in the premium tier. The team assists with onboarding the API, automations, or any integration you require.",
      "Need a usage report or invoice? Premium includes straightforward billing so teams can run the tools without chasing usage limits or manual approvals."
    ]
  }
];
