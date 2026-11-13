import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { checkout, faqs, nav, policies, product } from "@/lib/product";
import { MobileMenu } from "./Menu";
export function Logo() {
  return (
    <Link href="/" className="logo">
      <Image
        src={product.logo}
        width={150}
        height={38}
        alt="OwnGen home"
        unoptimized
      />
    </Link>
  );
}
export function Header() {
  return (
    <header>
      <div className="wrap header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary">
          {nav.map(([t, p]) => (
            <Link key={p} href={p}>
              {t}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href={checkout || "/pricing"}>
          {checkout ? "Buy OwnGen — " + product.price : "Get OwnGen"}
          <ArrowUpRight size={16} />
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="wrap foot-grid">
        <div>
          <Logo />
          <p>AI images, made on your own PC.</p>
        </div>
        {[
          ["Product", nav],
          [
            "Help",
            [
              ["Download", "/download"],
              ["FAQ", "/faq"],
              ["Support", "/support"],
            ],
          ],
          [
            "Policies",
            [
              ...Object.entries(policies).map(([k, [v]]) => [v, "/legal/" + k]),
              ["Report an intimate image", "/report-intimate-image"],
            ],
          ],
        ].map(([title, items]) => (
          <div key={String(title)}>
            <strong>{String(title)}</strong>
            {(items as readonly (readonly string[])[]).map(([t, p]) => (
              <Link href={p} key={p}>
                {t}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
export function Button({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link className={secondary ? "btn secondary" : "btn primary"} href={href}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
export function PricePanel() {
  return (
    <div className="price-panel">
      <div>
        <span className="eyebrow">
          <i /> {checkout ? "OwnGen V1" : "Prelaunch pricing"}
        </span>
        <h2>One PC. One purchase.</h2>
        <p>
          The planned V1 license covers one active Windows PC. Generate locally
          without per-image credits.
        </p>
      </div>
      <div className="price-action">
        <div>
          <b>{product.price}</b>
          <small> USD · one-time</small>
        </div>
        <Button href={checkout || "/system-requirements"}>
          {checkout ? "Buy OwnGen — " + product.price : "Check requirements"}
        </Button>
        {!checkout && <small>Not yet on sale</small>}
      </div>
    </div>
  );
}
export function FAQ({ short = false }: { short?: boolean }) {
  return (
    <div className="accordion">
      {(short ? faqs.slice(0, 4) : faqs).map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <Plus size={19} />
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
