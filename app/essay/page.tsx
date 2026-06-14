import Link from "next/link";
import { getAllEssays } from "@/services/weekly";
import CreateEssay from "@/components/essay/CreateEssay";
export default async  function EssayList(){
    const list = await getAllEssays()
    return(
         <div className="flex flex-col gap-4 m-10">
      <div className="flex justify-end">
        <CreateEssay />
      </div>
        <div className="flex justify-start pl-10 font-cinzel text-3xl">Essays</div>
        <div className=" w-16 h-px bg-white/[.22] mb-[1rem] ml-10" />
      <div className="flex-1 bg-[#0c0c0c] p-10 ml-10 mr-10 border border- border-white/[.22] rounded-lg relative">
        <ul className="gap-6 flex flex-col ">
          {list.map((item) => (
            <li key={item.id}>
              <Link href={`/essay/${item.id}`} className="flex items-center min-w-0 gap-4 p-4 border-b border-white/[.22]  hover:bg-white/[.05] transition-colors">
              <div className="text-xs text-white/[.42]">{item.id}</div>
              <div className="font-cinzel text-xs text-white/[.42]">{item.userName}</div>
              <div className="font-cinzel text-xs italic">{item.category}</div>
              <div className="font-cinzel text-sm leading-none">{item.title}</div>
              <div className="ml-auto text-sm text-white/[.42] font-garamond text-xs">
                {new Date(item.createdAt!).toDateString()}
              </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
}