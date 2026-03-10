"use client";

import Link from "next/link";

type BannerLink = { label: string; href: string };

export default function BannerClient({
  links,
  cinzelClass,
  garamondClass,
}: {
  links: BannerLink[];
  cinzelClass: string;
  garamondClass: string;
}) {
  return (
    <div
      className={`${cinzelClass} ${garamondClass} fixed top-0 z-50 w-full`}
      style={{
        background: "rgba(10, 8, 6, 0.92)",
        borderBottom: "1px solid rgba(180, 160, 140, 0.2)",
        backdropFilter: "blur(2px)",
      }}
    >
      <div className="px-10 py-4 flex items-center justify-between">
        {/* Title */}
        <div className="flex flex-col">
          <span
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "2.3rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#e8e2d9",
              lineHeight: 1.2,
            }}
          >
            The Study of Faith
          </span>
          <span
            style={{
              fontFamily: "var(--font-garamond)",
              fontSize: "1rem",
              letterSpacing: "0.25em",
              color: "#8a7060",
              textTransform: "uppercase",
              fontStyle: "italic",
            }}
          >
            Scripture &amp; Tradition
          </span>
        </div>

        {/* Nav */}
        <nav className="flex gap-10 items-center">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              style={{
                fontFamily: "var(--font-garamond)",
                fontSize: "1.3rem",
                letterSpacing: "0.08em",
                color: "#a09080",
                textDecoration: "none",
                fontStyle: "italic",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#e8e2d9")}
              onMouseLeave={e => (e.currentTarget.style.color = "#a09080")}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}