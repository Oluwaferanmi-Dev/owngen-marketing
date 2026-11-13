import { Button } from "@/components/Shell";
export default function NotFound() {
  return (
    <div className="wrap inner">
      <div className="intro">
        <span className="eyebrow">404</span>
        <h1>Page not found.</h1>
        <p>
          The address may have changed. You can explore OwnGen from the
          homepage.
        </p>
        <Button href="/">Back to home</Button>
      </div>
    </div>
  );
}
