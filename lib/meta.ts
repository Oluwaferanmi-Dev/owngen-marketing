import type { Metadata } from "next";
import { checkout, product } from "./product";
export function pageMeta(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index: Boolean(checkout), follow: Boolean(checkout) },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      siteName: product.name,
      images: [
        {
          url: product.socialImage,
          width: 1200,
          height: 630,
          alt: "OwnGen — AI images, made on your own PC.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.socialImage],
    },
  };
}
