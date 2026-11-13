"use client";
import Image from "next/image";
import { useState } from "react";
import { Aperture, ArrowLeft, ArrowRight, ScanLine } from "lucide-react";
const samples = [
  {
    title: "Jade after dark",
    img: "jade-after-dark",
    prompt: "A crystal mountain beneath a ribbon of northern light.",
    style: "Cinematic",
    alt: "Mint aurora over a jade crystal mountain reflected in a dark fjord",
  },
  {
    title: "Sun room",
    img: "sun-room",
    prompt: "An ochre archway catches the last light of the desert.",
    style: "Architectural",
    alt: "Sunlight crossing sculptural ochre archways in the desert",
  },
  {
    title: "Velvet iris",
    img: "velvet-iris",
    prompt: "A velvet iris in bloom, photographed against midnight blue.",
    style: "Macro",
    alt: "Detailed mauve iris petals against a dark studio background",
  },
];
export function Studio() {
  const [idx, setIdx] = useState(0);
  const s = samples[idx];
  return (
    <figure className="studio">
      <div className="studio-top">
        <span>
          <Aperture size={16} /> OwnGen Studio
        </span>
        <small>Concept preview</small>
      </div>
      <div className="art">
        <Image
          src={"/art/" + s.img + ".webp"}
          alt={s.alt}
          fill
          sizes="(max-width: 800px) 95vw, 48vw"
          loading={idx === 0 ? "eager" : "lazy"}
          unoptimized
        />
        <div className="art-title">
          <small>Style study / 0{idx + 1}</small>
          <strong>{s.title}</strong>
        </div>
      </div>
      <div className="prompt">
        <span>
          <ScanLine size={14} /> Sample prompt
        </span>
        <p>{s.prompt}</p>
      </div>
      <figcaption>
        <div className="swatches" aria-label="Artwork selection">
          {samples.map((v, i) => (
            <button
              key={v.img}
              onClick={() => setIdx(i)}
              aria-label={"View " + v.title}
              aria-pressed={i === idx}
            >
              <Image
                width={39}
                height={30}
                src={"/art/" + v.img + ".webp"}
                alt=""
                unoptimized
              />
            </button>
          ))}
        </div>
        <span aria-live="polite">{s.style}</span>
        <div className="arrows">
          <button
            aria-label="Previous artwork"
            onClick={() => setIdx((idx + 2) % 3)}
          >
            <ArrowLeft size={15} />
          </button>
          <button
            aria-label="Next artwork"
            onClick={() => setIdx((idx + 1) % 3)}
          >
            <ArrowRight size={15} />
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
