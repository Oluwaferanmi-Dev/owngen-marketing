import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, FAQ, PricePanel } from "@/components/Shell";
import { checkout, product, stages } from "@/lib/product";
import { pageMeta } from "@/lib/meta";
const pages: Record<string, [string, string, string]> = {
  features: [
    "Features",
    "A closer look at the studio.",
    "Explore the tools planned for the first version of OwnGen, from checking your hardware to saving your first image.",
  ],
  "how-it-works": [
    "Setup guide",
    "From purchase to first image.",
    "Follow the planned setup for a supported Windows PC. Have an internet connection ready for activation and your first model download.",
  ],
  "system-requirements": [
    "System requirements",
    "Will it run on your PC?",
    "Use these targets to check your setup. We’ll publish the tested GPU and driver combinations before purchases open.",
  ],
  pricing: [
    "Pricing",
    "Pay once. Create locally.",
    "One purchase covers the V1 desktop software on one active, compatible Windows PC.",
  ],
  download: [
    "Download guide",
    "Find your installer and key.",
    "When OwnGen goes on sale, Gumroad will deliver both through your purchase. Keep your receipt for future access.",
  ],
  faq: [
    "FAQ",
    "Your questions, answered.",
    "Find answers about hardware, licensing, offline creation and the planned release.",
  ],
  support: [
    "Support",
    "How can we help?",
    "For a purchase question, a device transfer or a concern about OwnGen, contact the publisher directly.",
  ],
  "report-intimate-image": [
    "Reporting",
    "Report an intimate image.",
    "You can contact the publisher privately about an intimate image made or shared without consent.",
  ],
};
export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = pages[slug];
  return p ? pageMeta(p[0], p[2], "/" + slug) : {};
}
function Rows({
  items,
  numbered = false,
}: {
  items: string[][];
  numbered?: boolean;
}) {
  return (
    <div className="rows">
      {items.map(([t, p], i) => (
        <section className="row" key={t}>
          {numbered && <span className="step">0{i + 1}</span>}
          <div>
            <h2>{t}</h2>
            <p>{p}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
function SupportLink() {
  return (
    <a className="mail" href={"mailto:" + product.support}>
      {product.support}
    </a>
  );
}
function Requirements() {
  const sys = product.system;
  return (
    <>
      <h2>Minimum targets</h2>
      <dl className="specs">
        {[
          ["Operating system", sys.os],
          ["Graphics", sys.gpu],
          ["Dedicated VRAM", sys.vram + " · target"],
          ["System memory", sys.ram + " · provisional"],
          ["Free disk space", sys.disk + " · provisional"],
        ].map(([t, v]) => (
          <div key={t}>
            <dt>{t}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <h2>Confirmed tested hardware</h2>
      <p>
        The compatibility list is pending. GTX and RTX are both NVIDIA graphics
        families. Support depends on the exact card, driver, model and available
        memory.
      </p>
      <h2>Find your PC’s specifications</h2>
      <Rows
        numbered
        items={[
          [
            "Windows version and RAM",
            "Open Settings → System → About. Check Windows specifications, System type and Installed RAM.",
          ],
          [
            "Graphics card and VRAM",
            "Press Ctrl + Shift + Esc to open Task Manager. Select Performance → GPU. Note the NVIDIA model name and the total dedicated GPU memory.",
          ],
          [
            "Free space",
            "Open File Explorer → This PC. Check available space on the drive where you plan to install OwnGen and its models.",
          ],
        ]}
      />
    </>
  );
}
function Body({ slug }: { slug: string }) {
  switch (slug) {
    case "features":
      return (
        <>
          <span className="eyebrow">{product.featuresStatus}</span>
          <Rows
            items={[
              [
                "A guided first run",
                "The Windows installer is planned to include the runtime and check your GPU, memory and disk space. First run will include age confirmation and terms acknowledgement.",
              ],
              [
                "Models for your hardware",
                "Download an approved model inside the app. Two performance tiers are planned. Final model choices and hardware pairings depend on testing and licensing.",
              ],
              [
                "Prompts and style presets",
                "Describe a still image in your own words, then choose from up to eight planned style presets. A basic prompt filter is planned.",
              ],
              [
                "Watch, review and save",
                "Follow generation progress, preview the result, save it locally and browse recent generations.",
              ],
              [
                "One-device activation",
                "Activate one compatible PC with your Gumroad key. After activation and the initial model download, generation is designed to work offline.",
              ],
            ]}
          />
          <Button href="/system-requirements">Check your PC</Button>
        </>
      );
    case "how-it-works":
      return (
        <>
          <Rows numbered items={stages} />
          <div className="note">
            The app may occasionally recheck your key when connected. Your
            prompts and images are processed on your PC.
          </div>
          <Button href="/system-requirements">Check your PC</Button>
        </>
      );
    case "system-requirements":
      return <Requirements />;
    case "pricing":
      return (
        <>
          <PricePanel />
          <h2>What the purchase covers</h2>
          <p>
            The V1 installer, a Gumroad-issued key for one active PC and local
            still-image generation. Internet access is required to activate and
            download an approved model.
          </p>
          <p>
            Future major versions and ongoing support are outside the purchase
            promise. Final update and refund terms will be published before
            sales open.
          </p>
          <div className="related">
            <Link href="/download">How delivery works →</Link>
            <Link href="/legal/refunds">Refund policy →</Link>
          </div>
        </>
      );
    case "download":
      return (
        <>
          {!checkout && (
            <div className="note">
              OwnGen is in prelaunch. This guide describes delivery once
              purchases open.
            </div>
          )}
          <Rows
            numbered
            items={[
              [
                "Open your Gumroad receipt",
                "Look for the receipt in the inbox used at checkout. Check spam if it’s missing. Follow the link to view the product content.",
              ],
              [
                "Retrieve the files and key",
                "Download the Windows installer from your purchased product. Keep the license key from the same Gumroad content page handy. You can also open the purchase from your Gumroad Library.",
              ],
              [
                "Activate and download a model",
                "Install on a supported PC and connect to the internet. If a key is missing or activation fails, contact support with your receipt reference and the error message. Keep the full key private.",
              ],
            ]}
          />
          <div className="related">
            <Button href="https://gumroad.com/library">
              Open Gumroad Library
            </Button>
            <Link href="/support">Get support →</Link>
          </div>
        </>
      );
    case "faq":
      return (
        <>
          <FAQ />
          <Button href="/support" secondary>
            Contact support
          </Button>
        </>
      );
    case "support":
      return (
        <>
          <div className="note">
            <h2>Email the publisher</h2>
            <SupportLink />
          </div>
          <Rows
            items={[
              [
                "Missing receipt or license key",
                "Check your purchase inbox and spam folder, then open the purchased product in Gumroad. Include the receipt reference when you contact us.",
              ],
              [
                "Setup or activation trouble",
                "Include your Windows version, NVIDIA GPU model and the error message. Keep passwords, payment details and full license keys out of email.",
              ],
              [
                "Move to another PC",
                "Email the publisher with a purchase reference and request a verified device transfer. Each key covers one active PC.",
              ],
            ]}
          />
          <div className="related">
            <Link href="/legal/refunds">Refunds →</Link>
            <Link href="/legal/complaints">Complaints →</Link>
            <Link href="/report-intimate-image">
              Intimate image reporting →
            </Link>
          </div>
        </>
      );
    default:
      return (
        <>
          <div className="note">
            <span className="eyebrow">Policy pending approval</span>
            <h2>Contact the publisher</h2>
            <SupportLink />
          </div>
          <p>
            Describe your concern in a few words. If available, include a page
            link or reference that helps locate the issue. You can say how you
            would like to be contacted.
          </p>
          <p>
            Please leave explicit images, identity documents and other sensitive
            attachments out of your email.
          </p>
          <Link className="text-link" href="/legal/complaints">
            Complaints information →
          </Link>
        </>
      );
  }
}
export default async function InformationPage({ params }: Props) {
  const { slug } = await params;
  const p = pages[slug];
  if (!p) notFound();
  return (
    <div className="wrap inner">
      <div className="intro">
        <span className="eyebrow">
          <i />
          {p[0]}
        </span>
        <h1>{p[1]}</h1>
        <p>{p[2]}</p>
      </div>
      <div className="reading">
        <Body slug={slug} />
      </div>
    </div>
  );
}
