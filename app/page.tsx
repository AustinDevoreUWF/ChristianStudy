import Image from "next/image";
import Link from "next/link";
import { getAllEssays, getWeekly} from "@/services/weekly";
export default async function Home() {
  const essays = await getAllEssays();
  const weekly = await getWeekly();
  if(!weekly){
    return <div className="text-white text-center pt-20">Loading layout...</div>;
  }

  return (
    <main className="bg-[#0c0c0c] min-h-screen ">
      {/* MastHead */}
      <div className="text-center pt-10 px-10">
        <div className="h-[2px] bg-white/[.18]"/>
        <div className="h-px bg-white/[.08] mt-2"/>
        <div className="h-20  py-5 text-7xl font-cinzel tracking-[.5rem] font- text-white/60 mb-5">Studying Faith</div>
        <p className="font-cinzel tracking-[.4rem] pb-3 text-xs uppercase text-white/30">Discussions · Essays · Readings</p>
        <div className="h-[2px] bg-white/[.08] "/>
      </div>
      {/*LinkBar */}
      <div className="mb-10 m-0 px-10">
        <ul className="flex justify-center list-none cursor-pointer">
          {["essay","discussion","users","References"].map((item) => (
            <li key={item} className="last:border-r-0 border-r border-white/[.08]">
              <Link href={item} className="flex px-8 items-center justify-center px-6 py-[.45rem] font-cinzel text-xs text-white/[.22] hover:text-white/60 transition-colors no-underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="h-px bg-white/[.08]"/>
      </div>
      {/*Scripture section*/}
      <div className="text-center text-2xl font-garamond text-white/[.4] italic px-20 pt-10">
          <p>"{weekly.featuredScriptureSummary}"</p>
          <p className=" text-center pt-6 text-white/[.18] font-cinzel text-sm tracking-widest">{weekly.featuredScriptureRef}</p>
      </div>
      {/*3 Columns (5 items needed)*/}
      <div className="grid grid-cols-[1fr_1px_1.7fr_1px_1fr] border-t border-b mt-20 items-stretch border-white/[.08] px-10">
        {/*Left Column*/}
          <div className=" mt-10 mr-10 pb-10">
            <p className=" border-b mb-5 pb-3 font-cinzel uppercase text-sm  text-[rgba(190,165,105,0.6)]">This week</p>
            <p className="font-cinzel text-xl font-bold text-white/[.6] tracking-wider">{weekly.saintName}</p>
            <p className="text-[rgba(190,165,105,0.6)] font-cinzel text-xs">{weekly.saintFeastDay}</p>
            <p className="text-white/[.22] font-garamond italic pt-5 ">{weekly.saintDescription}</p>
            <ul className="list-none mt-8">{weekly.citations.map((item)=>(
              <li key={item} className="mt-3">
                <a className="text-[rgba(190,165,105,0.6)] font-cinzel text-sm tracking-widest flex flex-col">
                  {item.reference}
                </a>
                <a className="font-garamond italic text-white/[.22] ">{item.summary}</a>
              </li>
            ))}</ul>
          </div>
        {/*Divider*/}
          <div className="bg-white/[.08]"/>
        {/*Middle Column*/}
          <div className="px-10 pb-10 mt-10">
            <p className=" border-b mb-5 pb-3 font-cinzel uppercase text-sm  text-[rgba(63,104,53,0.6)]">Featured Discussion This Week</p>
            <div className="w-full h-70 border border-white/[.40] relative shadow-[0_0_25px_rgba(63,104,53,0.5)]">
              <Image src={weekly.discussionImage} fill alt="discussion" className="object-cover object-top " />
            </div>
            <p className=" text-xl font-cinzel text-white/[.6] font-medium pt-5">{weekly.discussionTitle}</p>
            <p className="text-lg font-garamond italic text-white/[.22] pt-1">{weekly.discussionDescription}</p>
            <div className="flex flex-row tracking-widest">
              <p className="text-sm text-white/[.22] font-cinzel pt-5 pl-5"> {weekly.discussionCloses}</p>
            </div> 
            <div className="flex justify-center">
              <button className="w-full mt-5 p-10 font-cinzel text-lg tracking-[0.2em] uppercase text-white/30 border border-white/10 bg-transparent  hover:text-white/60 hover:border-white/30 hover:bg-white/[.01] cursor-pointer transition-all">Join the Discussion →</button>
            </div>
          </div>
        {/*Divider */}
          <div className="bg-white/[.08]"/>
        {/*Right Column*/}
          <div className="px-10 pb-10 mt-10">
            <p className=" border-b mb-5 pb-3 font-cinzel uppercase text-sm  text-[rgba(37,100,172,0.6)]">Selected Essays</p>
            <ul>{essays.map((item)=>(
              <li key={item} className="flex-col mb-5 border-t  first:border-t-0">
                <span className="flex flex-col text-[rgba(37,100,172,0.6)] font-cinzel text-sm mt-5">
                  {item.category}
                </span>
                <span className="text-white/[.60] font-garamond flex flex-col ">{item.title}</span>
                {/*<span className="text-white/[.22] font-cinzel text-xs ">{item.mins} min Read</span>*/}
              </li>
            ))}</ul>
          </div>
      </div>


    </main>
  );
}