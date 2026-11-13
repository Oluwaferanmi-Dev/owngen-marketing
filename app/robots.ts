import { checkout, product } from "@/lib/product";
export default function robots() {
  return {
    rules: checkout
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: new URL("/sitemap.xml", product.site).href,
  };
}
