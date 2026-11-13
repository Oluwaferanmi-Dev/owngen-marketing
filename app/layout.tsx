import type { Metadata } from "next";
import { Header, Footer } from "@/components/Shell";
import { product } from "@/lib/product";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(product.site),
  title: { default: "OwnGen", template: "%s | OwnGen" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
