"use client";
import Link from "next/link";
import { useAuth } from "./context/AuthContext";
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
  const { user } = useAuth();
  return (
    <div className={`${cinzelClass} ${garamondClass} fixed top-0 z-50 w-full h-[72px] bg-[#060606] border-b border-[rgba(255,255,255,0.08)] backdrop-blur-[2px] flex items-center`}>
      <div className="px-10 w-full flex items-center justify-between">
        <div className="flex flex-col gap-[3px]">
          <span className="font-[var(--font-cinzel)] text-[1.55rem] font-semibold tracking-[0.07em] text-white leading-[1]">
            The Study of Faith
          </span>
          <span className="font-[var(--font-garamond)] text-[0.72rem] tracking-[0.30em] text-[rgba(255,255,255,0.30)] uppercase italic">
            Reason &amp; Love
          </span>
        </div>

        <nav className="flex gap-10 items-center">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="font-[var(--font-garamond)] text-[1.1rem] tracking-[0.06em] text-[rgba(255,255,255,0.35)] no-underline italic transition duration-200 ease-in-out hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/profile" className="inline-flex items-center justify-center">
            {user?.profilePic ? (
              <img src={user.profilePic} alt="Profile" className="w-[32px] h-[32px] rounded-full object-cover" />
            ) : user ? (
              <span className="inline-flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.85)] text-[0.9rem]">
                {user.userName.split(" ").map((n) => n[0]).join("")}
              </span>
            ) : null}
          </Link>
        </nav>
      </div>
    </div>
  );
}

