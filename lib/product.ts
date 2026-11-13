export const product = {
  name: "OwnGen",
  price: "$29.99",
  support: "beckytheaigirl@gmail.com",
  system: {
    os: "Windows 10 or 11 · 64-bit",
    gpu: "Supported NVIDIA GPU",
    vram: "4 GB",
    ram: "8 GB",
    disk: "20 GB",
  },
  logo: "/brand/owngen-logo-horizontal-on-dark.svg",
  mark: "/brand/owngen-mark-small-on-dark.svg",
  socialImage: "/brand/og-image-1200x630.png",
  featuresStatus: "Planned for V1",
  site: process.env.NEXT_PUBLIC_SITE_URL || "https://owngen.io",
};
function approvedCheckout() {
  if (
    process.env.OWNGEN_RELEASE_APPROVED !== "true" ||
    !process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL
  )
    return null;
  try {
    const url = new URL(process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL);
    return url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      !url.port &&
      (url.hostname === "gumroad.com" ||
        url.hostname.endsWith(".gumroad.com")) &&
      /^\/l\/[^/]+\/?$/.test(url.pathname)
      ? url.href
      : null;
  } catch {
    return null;
  }
}
export const checkout = approvedCheckout();
export const nav = [
  ["Features", "/features"],
  ["How it works", "/how-it-works"],
  ["Requirements", "/system-requirements"],
  ["Pricing", "/pricing"],
] as const;
export const policies = {
  terms: [
    "Terms of use",
    "The terms for using the desktop software and activating a purchase key.",
  ],
  "content-policy": [
    "Content policy",
    "Guidance on the permitted use of OwnGen and how to raise a concern.",
  ],
  privacy: [
    "Privacy notice",
    "Details about licensing data, purchases and contact with support.",
  ],
  refunds: [
    "Refund policy",
    "Information for buyers who need help with a purchase or want to request a refund.",
  ],
  complaints: [
    "Complaints",
    "How to contact the publisher about the software, a purchase or a support concern.",
  ],
};
export const faqs = [
  [
    "Does OwnGen need the internet?",
    "The first activation and model download require an internet connection. After setup, image generation is designed to work offline. When connected, the app may occasionally recheck your license.",
  ],
  [
    "Which PCs can run OwnGen?",
    "V1 targets 64-bit Windows 10 and 11 PCs with a supported NVIDIA GPU. GTX and RTX cards are being considered. We’ll publish specific tested cards and drivers before sales open.",
  ],
  [
    "Do I pay for each image?",
    "No. The planned V1 price is " +
      product.price +
      " once for one active PC. Image generation runs on your own hardware, without image credits or a subscription.",
  ],
  [
    "Where do my prompts and images go?",
    "The desktop app is designed to process prompts on your GPU and save images on your PC. Activation and license rechecks send a key or token and a pseudonymous device identifier to the licensing service.",
  ],
  [
    "Is a 4 GB graphics card enough?",
    product.system.vram +
      " of dedicated VRAM is a testing target. The exact GPU, driver and model matter. Confirmed hardware will be listed on the system requirements page.",
  ],
  [
    "Can I move my license to another PC?",
    "Each key covers one active PC. Contact support to request a verified device transfer before activating a replacement machine.",
  ],
  [
    "Does it run on Mac, Linux or mobile?",
    "V1 is planned for Windows PCs only. Mac, Linux, mobile and AMD-only or Intel-only rendering are outside the planned release.",
  ],
  [
    "How will I get the installer and key?",
    "Once sales open, purchase through Gumroad. Open the product from your receipt, download page or Gumroad Library to retrieve your Windows installer and license key.",
  ],
  [
    "How do refunds and support work?",
    "Contact the publisher with your Gumroad receipt reference and a short description. Refund and support terms are awaiting approval and will be available before sales open.",
  ],
];
export const stages = [
  [
    "Purchase on Gumroad",
    "Once sales open, purchase OwnGen V1 through the official Gumroad product page.",
  ],
  [
    "Open your receipt",
    "Use the download page in your receipt or your Gumroad Library to find the installer and license key.",
  ],
  [
    "Install on your PC",
    "Run the Windows installer on a supported NVIDIA PC. The planned setup checks your hardware and available space.",
  ],
  [
    "Activate online",
    "Enter your purchase key to activate one PC. The first activation requires internet access.",
  ],
  [
    "Download a model",
    "Stay connected while you download an approved model for your hardware.",
  ],
  [
    "Create locally",
    "Write a prompt, choose a style and save a still image on your PC. After setup, generation is designed to work offline.",
  ],
];
