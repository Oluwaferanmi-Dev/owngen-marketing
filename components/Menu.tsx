"use client";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { nav } from "@/lib/product";
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  function close() {
    setOpen(false);
    trigger.current?.focus();
  }
  return (
    <div
      className="mobile-menu"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) close();
      }}
    >
      <button
        ref={trigger}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav id="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {[
          ...nav,
          ["Download", "/download"],
          ["FAQ", "/faq"],
          ["Support", "/support"],
        ].map(([label, path]) => (
          <Link href={path} key={path} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
