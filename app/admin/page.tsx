"use client"
import { useState } from "react";
import {updateFeaturedDiscussion, updateSaint, updateFeaturedScripture, updateScripture} from "@/services/weekly";
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
    function removeCitation(){
        setForm((prev)=>({...prev, citations: prev.citations.slice(0,-1)}))
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
 
        </div>
    )
}