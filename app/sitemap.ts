import { product, policies } from "@/lib/product";
export default function sitemap() {
  return [
    "",
    "features",
    "how-it-works",
    "system-requirements",
    "pricing",
    "download",
    "faq",
    "support",
    "report-intimate-image",
    ...Object.keys(policies).map((p) => "legal/" + p),
  ].map((p) => ({ url: new URL("/" + p, product.site).href }));
}
