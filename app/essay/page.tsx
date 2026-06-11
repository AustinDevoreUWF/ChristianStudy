import Link from "next/link";
import { getAllEssays } from "@/services/weekly";
import CreateEssay from "@/components/essay/CreateEssay";
export default async  function EssayList(){
    const list = await getAllEssays()
    return(
        <div>
            <div>
                <CreateEssay />
            </div>
        <div className="bg-[#0c0c0c] min-h-screen">
            <ul>
            {list.map((item)=>(
                <li className="text-red-500">{item.id}</li>
            ))}
            </ul>
        </div>
        </div>
    )
}