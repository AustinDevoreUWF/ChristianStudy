import Image from "next/image";
import Link from "next/link";
import { getAllEssays, getWeekly} from "@/services/weekly";
import LinkBar from "@/components/LinkBar";

export default async function Home() {
  const essays = await getAllEssays();
  const weekly = await getWeekly();
  if(!weekly){
    return <div className="text-white text-center pt-20">Loading layout...</div>;
  }

  //adding a comment for refresh
  return (
    <main className="bg-[#0c0c0c] min-h-screen">
      {/* MastHead */}
      <div className="text-center pt-4 px-4 sm:pt-10 sm:px-10">
        <div className="h-[2px] bg-white/[.18]"/>
        <div className="h-px bg-white/[.08] mt-2"/>
        <div className="h-12 sm:h-20 py-2 sm:py-5 text-4xl sm:text-6xl lg:text-7xl font-cinzel tracking-[.3rem] sm:tracking-[.5rem] text-white1 mb-3 sm:mb-5">Dove</div>
        <p className="font-cinzel tracking-[.2rem] sm:tracking-[.4rem] pb-2 sm:pb-3 text-xs uppercase text-white/30">Discussions · Essays · Readings</p>
        <div className="h-[2px] bg-white/[.08]"/>
      </div>
      {/*LinkBar */}
      <LinkBar />
      {/*Scripture section*/}
      <div className="text-center text-lg sm:text-2xl font-garamond text-white1 italic px-4 sm:px-20 pt-6 sm:pt-10">
          <p>"{weekly.featuredScriptureSummary}"</p>
          <p className="text-center pt-4 sm:pt-6 text-white/[.18] font-cinzel text-xs sm:text-sm tracking-widest">{weekly.featuredScriptureRef}</p>
      </div>
      {/*Mobile: Stack, Tablet+: 3 Columns*/}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1px_1.7fr_1px_1fr] border-t border-b mt-12 sm:mt-20 items-stretch border-white/[.08] px-4 sm:px-10">
        {/*Left Column*/}
          <div className="mt-6 sm:mt-10 sm:mr-10 pb-6 sm:pb-10">
            <p className="border-b mb-3 sm:mb-5 pb-2 sm:pb-3 font-cinzel uppercase text-xs sm:text-sm text-[rgba(190,165,105,0.6)]">This week</p>
            <p className="font-cinzel text-sm sm:text-md tracking-wide mb-2 sm:mb-3 text-center text-[rgba(190,165,105,0.6)]">Saint</p>
            <div className="h-px w-10 bg-[rgba(190,165,105,0.3)] mx-auto mt-1 mb-4"/>
            <p className="font-cinzel text-lg sm:text-xl font-bold text-white1 tracking-wider">{weekly.saintName}</p>
            <p className="text-[rgba(190,165,105,0.6)] font-cinzel text-xs">{weekly.saintFeastDay}</p>
            <p className="text-white1 font-garamond italic pt-3 sm:pt-5 text-sm sm:text-base">{weekly.saintDescription}</p>
            <p className="font-cinzel text-sm sm:text-md tracking-wide mt-4 sm:mt-5 text-center text-[rgba(190,165,105,0.6)]">Readings</p>
            <div className="h-px w-10 bg-[rgba(190,165,105,0.3)] mx-auto mt-1 mb-4"/>
            <ul className="list-none mt-4 sm:mt-5">{weekly.citations.map((item)=>(
              <li key={item.reference} className="mt-2 sm:mt-3">
                <a className="text-[rgba(190,165,105,0.6)] font-cinzel text-xs sm:text-sm tracking-widest flex flex-col">
                  {item.reference}
                </a>
                <a className="font-garamond italic text-white1 text-sm sm:text-base">{item.summary}</a>
              </li>
            ))}</ul>
          </div>
        {/*Divider - Hidden on mobile*/}
          <div className="hidden sm:block bg-white/[.08]"/>
        {/*Middle Column*/}
          <div className="px-4 sm:px-10 pb-6 sm:pb-10 mt-6 sm:mt-10">
            <p className="border-b mb-3 sm:mb-5 pb-2 sm:pb-3 font-cinzel uppercase text-xs sm:text-sm text-[rgba(63,104,53,0.6)]">Featured Discussion This Week</p>
            <div className="w-full h-40 sm:h-70 border border-white/[.40] relative shadow-[0_0_25px_rgba(63,104,53,0.5)]">
              <Image src={weekly.discussionImage} fill alt="discussion" className="object-cover object-top border-b-1"/>
            </div>
            <div className="h-px w-full bg-[rgba(63,104,53,0.6)] mx-auto mt-2 sm:mt-3"/>
            <p className="text-lg sm:text-xl font-cinzel text-white1 font-medium pt-3 sm:pt-5">{weekly.discussionTitle}</p>
            <p className="text-base sm:text-lg font-garamond italic text-white1 pt-1">{weekly.discussionDescription}</p>
            <div className="flex flex-row tracking-widest">
              <p className="text-xs sm:text-sm text-white/[.22] font-cinzel pt-3 sm:pt-5 pl-0 sm:pl-5">{weekly.discussionCloses}</p>
            </div>
            <div className="flex justify-center">
              <Link href="/discussion" className="w-full">
                <button className="w-full mt-4 sm:mt-5 p-4 sm:p-10 font-cinzel text-sm sm:text-lg tracking-[0.2em] uppercase text-white/30 border border-white/10 bg-transparent hover:text-white/60 hover:border-white/30 hover:bg-white/[.01] cursor-pointer transition-all">Join the Discussion →</button>
              </Link>
            </div>
          </div>
        {/*Divider - Hidden on mobile*/}
          <div className="hidden sm:block bg-white/[.08]"/>
        {/*Right Column*/}
          <div className="px-4 sm:px-10 pb-6 sm:pb-10 mt-6 sm:mt-10">
            <p className="border-b mb-3 sm:mb-5 pb-2 sm:pb-3 font-cinzel uppercase text-xs sm:text-sm text-[rgba(37,100,172,0.6)]">Selected Essays</p>
            <ul>{essays.map((item)=>(
              <li key={item.title} className="flex-col mb-4 sm:mb-5 border-t first:border-t-0">
                <span className="flex flex-col text-[rgba(37,100,172,0.6)] font-cinzel text-xs sm:text-sm mt-3 sm:mt-5">
                  {item.category}
                </span>
                <Link href={"/essay"} className="text-white1 font-garamond flex flex-col text-sm sm:text-base">{item.title}</Link>
              </li>
            ))}</ul>
          </div>
      </div>


    </main>
  );
}