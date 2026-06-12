import Link from "next/link";
import { getAllEssays } from "@/services/weekly";
import CreateEssay from "@/components/essay/CreateEssay";
export default async  function EssayList(){
    const list = await getAllEssays()
    return(
         <div className="flex flex-col lg:flex-row-reverse lg:items-start gap-6 p-10 m-20">
      <div className="lg:sticky lg:top-10 shrink-0">
        <CreateEssay />
      </div>
        <div className="flex justify-center">ESSAYS</div>
      <div className="flex-1 bg-[#0c0c0c] p-10 border border-white/[.22] rounded-lg">
        <ul className="space-y-2">
          {list.map((item) => (
            <li key={item.id} className="flex flex-row gap-4 items-center border rounded-lg border-white/[.22] p-2">
              <div className="text-xs text-white/[.22]">{item.id}</div>
              <div className="font-cinzel text-xs">{item.category}</div>
              <div className="font-garamond text-lg">{item.title}</div>
              <div className="ml-auto text-sm text-white/[.22] font-garamond text-xs">
                {new Date(item.createdAt!).toDateString()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
}