import { Cinzel, EB_Garamond } from "next/font/google";
import BannerClient from "./BannerClient";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", weight: ["400", "600"] });
const garamond = EB_Garamond({ subsets: ["latin"], variable: "--font-garamond", weight: ["400", "500"] });

type BannerLink = { label: string; href: string };

export default function Banner({ links }: { links: BannerLink[] }) {
  return (
    <BannerClient
      links={links}
      cinzelClass={`${cinzel.variable}`}
      garamondClass={`${garamond.variable}`}
    />
  );
}