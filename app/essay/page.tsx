import Link from "next/link";
import { getAllEssays } from "@/services/weekly";
export default async  function EssayList(){
    const list = await getAllEssays()
    return(
        <div className="bg-[#0c0c0c] min-h-screen">
            <ul>
            {list.map((item)=>(
                <li className="text-red-500">{item.id}</li>
            ))}
            </ul>
        </div>
    )
}