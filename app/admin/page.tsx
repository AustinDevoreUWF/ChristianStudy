"use client"
import { useState } from "react";
import { featuredDiscussionDTO, saintDTO, readingsDTO, featuredScriptureDTO } from "@/src/dto/weeklyDTO";

export default function adminPage(){
    //object literal
    const [form, setForm] = useState({
        discussionTitle: "",
        discussionDescription: "",
        discussionImage: "",
        discussionCloses: "",
        saintName: "",
        saintDescription: "",
        saintFeastDay: "",
        featuredScriptureRef: "",
        featuredScriptureSummary: "",
        citations: [] as { reference:string; summary:string;}[],//citations typing broken down in object notation
    });
    async function save(inputType: string, input: object){
        const res = await fetch(`/api/weekly`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({section:inputType,...input}),
        });
        return res.json()
    }

    function set(inputType:string, input:string){
        setForm((prev)=>({...prev,[inputType]:input}));
    }
    
    //edits citation array given an index
    function setCitation(index:number, field: "reference"|"summary",value:string){
        setForm((prev)=>{
            const citations = [...prev.citations]
            citations[index] = {...citations[index],[field]: value}
            return {...prev, citations};
        })
    }

    function addCitation(){
        setForm((prev)=>({...prev, citations: [...prev.citations, {reference: "",summary: ""}]}))
    }
    function removeCitation(index:number){
        setForm((prev)=>({...prev, citations: prev.citations.filter((_,i)=>i!==index)}))
    }
    function handleUpdateFeaturedDiscussion(){
        const dto: featuredDiscussionDTO ={
            discussionTitle: form.discussionTitle,
            discussionDescription: form.discussionDescription,
            discussionImage: form.discussionImage,
            discussionCloses: form.discussionCloses,
        }
        save("discussion",dto);
    }

    function handleUpdateSaint(){
        const dto: saintDTO ={
            saintName: form.saintName,
            saintDescription: form.saintDescription,
            saintFeastDay: form.saintFeastDay,
        }
        save("saint",dto);
    }

    function handleUpdateReadings(){
        const dto: readingsDTO = {
            citations: form.citations,
        }
        save("readings",dto);
    }

    function handleUpdateFeaturedScripture(){
        const dto: featuredScriptureDTO ={
            featuredScriptureRef: form.featuredScriptureRef,
            featuredScriptureSummary: form.featuredScriptureSummary,
        }
        save("featuredScripture",dto);
    }

    return(
        <div className="flex flex-col items-center">
            <div className="mt-8 text-4xl font-cinzel text-white/[.66]">Update Home Page</div>
 
            {/* Featured Discussion */}
            <div className="flex flex-col mt-5">
                <p className="text-2xl font-cinzel text-white/[.66] ">Featured Discussion</p>
                <div className="flex flex-col border border-white/66 font-garamond">
                    <input type="text" value={form.discussionTitle} onChange={(e)=>set("discussionTitle",e.target.value)} className="" placeholder="Discussion Title"/>
                    <input type="text" value={form.discussionDescription} onChange={(e)=>set("discussionDescription",e.target.value)} className="" placeholder="Discussion Description"/>
                    <input type="text" value={form.discussionImage} onChange={(e)=>set("discussionImage",e.target.value)} className="" placeholder="Discussion Image"/>
                    <input type="text" value={form.discussionCloses} onChange={(e)=>set("discussionCloses",e.target.value)} className="" placeholder="Discussion Closes"/>
                </div>
            </div>
            <button onClick={handleUpdateFeaturedDiscussion} className="bg-white/66 text-black font-garamond mt-2 px-4 py-2 rounded hover:cursor-pointer">Save Featured Discussion</button>
 
            {/* Saint */}
            <div className="flex flex-col mt-5">
                <p className="text-2xl font-cinzel text-white/[.66] ">Saint of the Week</p>
                <div className="flex flex-col border border-white/66 font-garamond">
                    <input type="text" value={form.saintName} onChange={(e)=>set("saintName",e.target.value)} className="" placeholder="Saint Name"/>
                    <input type="text" value={form.saintFeastDay} onChange={(e)=>set("saintFeastDay",e.target.value)} className="" placeholder="Feast Day"/>
                    <input type="text" value={form.saintDescription} onChange={(e)=>set("saintDescription",e.target.value)} className="" placeholder="Saint Description"/>
                </div>
            </div>
            <button onClick={handleUpdateSaint} className="bg-white/66 text-black font-garamond mt-2 px-4 py-2 rounded hover:cursor-pointer">Save Saint</button>
 
            {/* Featured Scripture (the single quote at the top) */}
            <div className="flex flex-col mt-5">
                <p className="text-2xl font-cinzel text-white/[.66] ">Featured Scripture</p>
                <div className="flex flex-col border border-white/66 font-garamond">
                    <input type="text" value={form.featuredScriptureRef} onChange={(e)=>set("featuredScriptureRef",e.target.value)} className="" placeholder="Reference (e.g. Romans 8:28)"/>
                    <input type="text" value={form.featuredScriptureSummary} onChange={(e)=>set("featuredScriptureSummary",e.target.value)} className="" placeholder="Your summary"/>
                </div>
            </div>
            <button onClick={handleUpdateFeaturedScripture} className="bg-white/66 text-black font-garamond mt-2 px-4 py-2 rounded hover:cursor-pointer">Save Featured Scripture</button>
 
            {/* Readings (the array) */}
            <div className="flex flex-col mt-5 w-full max-w-md">
                <p className="text-2xl font-cinzel text-white/[.66] ">Readings</p>
                <div className="flex flex-col gap-3 font-garamond">
                    {form.citations.map((c, i) => (
                        <div key={i} className="flex flex-col border border-white/66 p-2 relative">
                            <button onClick={()=>removeCitation(i)} className="absolute top-1 right-2 text-white/40 hover:text-white/80 text-sm">x</button>
                            <input type="text" value={c.reference} onChange={(e)=>setCitation(i,"reference",e.target.value)} className="" placeholder="Reference (e.g. Luke 7:1-10)"/>
                            <input type="text" value={c.summary} onChange={(e)=>setCitation(i,"summary",e.target.value)} className="" placeholder="Summary"/>
                        </div>
                    ))}
                </div>
                <button onClick={addCitation} className="border border-dashed border-white/40 text-white/50 font-cinzel mt-3 px-4 py-2 rounded hover:text-white/80 hover:cursor-pointer">+ Add Reading</button>
            </div>
            <button onClick={handleUpdateReadings} className="bg-white/66 text-black font-garamond mt-2 px-4 py-2 rounded hover:cursor-pointer">Save Readings</button>
 
        </div>
    )
}