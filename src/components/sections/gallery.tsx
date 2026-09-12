"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
export function Gallery({
  items,
  name,
}: {
  items: { image: string; label: string }[];
  name: string;
}) {
  const [index, setIndex] = useState(0);
  const current = items[index];
  return (
    <div>
      <div className="gallery-stage">
        <Image
          src={current.image}
          width={1800}
          height={1300}
          sizes="(max-width: 800px) 100vw, 1200px"
          alt={`${name} — ${current.label}`}
        />
      </div>
      <div className="gallery-controls">
        <p aria-live="polite">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(items.length).padStart(2, "0")} &nbsp; — &nbsp;{" "}
          {current.label}
        </p>
        <div>
          <a
            className="icon-button"
            href={current.image}
            download
            aria-label={`Download ${current.label}`}
          >
            <Download size={17} />
          </a>
          <button
            className="icon-button"
            aria-label="Previous image"
            onClick={() => setIndex((index - 1 + items.length) % items.length)}
          >
            <ArrowLeft size={17} />
          </button>
          <button
            className="icon-button"
            aria-label="Next image"
            onClick={() => setIndex((index + 1) % items.length)}
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div
        className="gallery-thumbs"
        role="group"
        aria-label="Select gallery image"
      >
        {items.map((item, i) => (
          <button
            key={item.image}
            className={i === index ? "active" : ""}
            aria-label={item.label}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          >
            <Image src={item.image} alt="" width={100} height={75} />
          </button>
        ))}
      </div>
    </div>
  );
}
