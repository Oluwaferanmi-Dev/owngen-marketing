import Link from "next/link";
import { notFound } from "next/navigation";
import { policies, product } from "@/lib/product";
import { pageMeta } from "@/lib/meta";
type Props = { params: Promise<{ policy: string }> };
function lookup(k: string) {
  return policies[k as keyof typeof policies];
}
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(policies).map((policy) => ({ policy }));
}
export async function generateMetadata({ params }: Props) {
  const { policy } = await params;
  const p = lookup(policy);
  return p ? pageMeta(p[0], p[1], "/legal/" + policy) : {};
}
export default async function Policy({ params }: Props) {
  const { policy } = await params;
  const p = lookup(policy);
  if (!p) notFound();
  return (
    <div className="wrap inner">
      <div className="intro">
        <span className="eyebrow">
          <i />
          Policy pending approval
        </span>
        <h1>{p[0]}</h1>
        <p>{p[1]}</p>
      </div>
      <div className="reading">
        <h2>Publication status</h2>
        <p>
          The publisher is reviewing this policy. The approved text will appear
          here before sales open.
        </p>
        <h2>Contact the publisher</h2>
        <p>
          {policy === "refunds"
            ? "For a purchase question, include your Gumroad receipt reference."
            : policy === "complaints"
              ? "Briefly describe your concern and include a reference if you have one."
              : "Send questions about this policy to the OwnGen support address."}
        </p>
        <a className="mail" href={"mailto:" + product.support}>
          {product.support}
        </a>
        <div className="related">
          <Link href="/support">Support →</Link>
          <Link href="/report-intimate-image">Report an intimate image →</Link>
        </div>
      </div>
    </div>
  );
}
