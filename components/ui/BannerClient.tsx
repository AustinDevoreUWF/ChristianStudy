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
        background: "#060606",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(2px)",
        height: "72px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="px-10 w-full flex items-center justify-between">
        {/* Title */}
        <div className="flex flex-col" style={{ gap: "3px" }}>
          <span
            style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "1.55rem",
              fontWeight: 600,
              letterSpacing: "0.07em",
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            The Study of Faith
          </span>
          <span
            style={{
              fontFamily: "var(--font-garamond)",
              fontSize: "0.72rem",
              letterSpacing: "0.30em",
              color: "rgba(255,255,255,0.30)",
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
                fontSize: "1.1rem",
                letterSpacing: "0.06em",
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                fontStyle: "italic",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}