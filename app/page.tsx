import Link from "next/link";
import {
  ArrowRight,
  CircuitBoard,
  Cpu,
  FolderDown,
  HardDrive,
  Image as ImageIcon,
  Monitor,
  SlidersHorizontal,
  SquareTerminal,
  Wallet,
  WifiOff,
} from "lucide-react";
import { Button, FAQ, PricePanel } from "@/components/Shell";
import { Studio } from "@/components/Studio";
import { checkout, product } from "@/lib/product";
import { pageMeta } from "@/lib/meta";
export const metadata = pageMeta(
  "AI images, made on your own PC",
  "Meet OwnGen, a local still-image generator planned for Windows PCs with supported NVIDIA graphics.",
  "/",
);
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: product.name,
            url: product.site,
          }).replace(/</g, "\\u003c"),
        }}
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <i /> Local AI image studio
            </span>
            <h1>
              AI images,
              <br />
              made on{" "}
              <em>
                your
                <br className="wide-break" /> own PC.
              </em>
            </h1>
            <p>
              Turn a prompt into a still image with your own NVIDIA GPU. OwnGen
              is designed for Windows, with your ideas and artwork kept on your
              machine.
            </p>
            <div className="actions">
              <Button href="/features">Explore features</Button>
              <Link href="/how-it-works" className="text-link">
                How it works <ArrowRight size={15} />
              </Link>
            </div>
            <div className="hero-meta">
              <span className="win">
                <b />
                <b />
                <b />
                <b />
              </span>{" "}
              Windows 10 / 11 <span className="meta-divider">/</span>{" "}
              {checkout ? "Available" : "Coming soon"}
            </div>
          </div>
          <Studio />
        </div>
      </section>
      <div className="trust">
        <div className="wrap">
          <span>
            <Monitor /> Windows 10 / 11
          </span>
          <span>
            <Cpu /> Supported NVIDIA GPUs
          </span>
          <span>
            <Wallet /> One-time purchase
          </span>
          <span>
            <HardDrive /> Local generation
          </span>
        </div>
      </div>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Inside OwnGen</span>
            <h2>Your desktop studio.</h2>
          </div>
          <Link className="text-link" href="/features">
            All planned features <ArrowRight size={15} />
          </Link>
        </div>
        <div className="card-grid">
          {[
            [
              SquareTerminal,
              "Your words stay here",
              "Write a prompt and let your own graphics card do the work.",
            ],
            [
              SlidersHorizontal,
              "Find your style",
              "Explore planned presets and choose a look for your image.",
            ],
            [
              FolderDown,
              "Keep your artwork",
              "Save the images you like to your own Pictures folder.",
            ],
          ].map(([Icon, title, body]) => {
            const Symbol = Icon as typeof SquareTerminal;
            return (
              <article className="value-card" key={String(title)}>
                <Symbol />
                <h3>{String(title)}</h3>
                <p>{String(body)}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="tint">
        <div className="wrap section local-grid">
          <div>
            <span className="eyebrow">How it works</span>
            <h2>From prompt to picture.</h2>
            <p>
              Activate online and download a model once. After setup, OwnGen is
              designed to create offline, with occasional license checks when
              you reconnect.
            </p>
            <Link className="text-link" href="/how-it-works">
              See the setup guide <ArrowRight size={15} />
            </Link>
          </div>
          <ol className="process">
            {[
              [
                SquareTerminal,
                "Your prompt",
                "Describe the image you have in mind.",
              ],
              [
                CircuitBoard,
                "Your NVIDIA GPU",
                "A local model turns your words into an image.",
              ],
              [ImageIcon, "Your image", "Save your chosen result to your PC."],
            ].map(([Icon, t, p]) => {
              const Symbol = Icon as typeof WifiOff;
              return (
                <li key={String(t)}>
                  <Symbol />
                  <div>
                    <h3>{String(t)}</h3>
                    <p>{String(p)}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
      <section className="wrap section">
        <span className="eyebrow">Compatibility</span>
        <h2>Check your setup.</h2>
        <p>
          V1 targets 64-bit Windows 10 and 11 with a supported NVIDIA GPU. The{" "}
          {product.system.vram} VRAM target is under test. Confirmed cards and
          drivers will be listed before sales open.
        </p>
        <Link className="text-link" href="/system-requirements">
          View system requirements <ArrowRight size={15} />
        </Link>
      </section>
      <section className="wrap section faq-grid">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2>Good to know.</h2>
          <Link className="text-link" href="/faq">
            All questions <ArrowRight size={15} />
          </Link>
        </div>
        <FAQ short />
      </section>
      <section className="wrap final">
        <PricePanel />
      </section>
    </>
  );
}
