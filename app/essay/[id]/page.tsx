import ReactMarkdown from "react-markdown"
import Link from "next/link";
import {getEssayById} from "@/services/weekly";

//the page that displays the single component, take the id 
//get params, in params, grab id which is a string.
export default async function EssayDisplay({params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    const essay = await getEssayById(Number(id));
    if(!essay)return null;

    return(
        <div>
            <div className="flex m-5 ">
                <Link href="/essay" className="border border-white/[.20] font-cinzel text-sm text-white/[.6]  px-5 py-2 transition-all duration-300 hover:border-white/[.05] hover:text-white">Back</Link>
            </div>
        <div className="flex flex-col  items-center bg-[#0g0g0g] p-10 mt-5 border border-white/[.22] rounded-lg  m-5 ">
            
            <h1 className="text-5xl font-cinzel ">{essay.title}</h1>
            <h2 className="text-xl font-garamond italic text-white/[.42]">{essay.category}</h2>
            <div className="w-128 h-px bg-white/[.42] mt-5" />
            <div className="prose prose-invert prose-lg prose-garamond mt-5 max-w-2xl font-garamond text-white/70">
                <ReactMarkdown>{essay.text}</ReactMarkdown>
            </div>
        </div>
        </div>
    )
}