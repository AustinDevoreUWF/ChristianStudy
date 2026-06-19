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

    function handleFeaturedDiscussion(){
        const dto: featuredDiscussionDTO ={
            discussionTitle: form.discussionTitle,
            discussionDescription: form.discussionDescription,
            discussionImage: form.discussionImage,
            discussionCloses: form.discussionCloses,
        }
        save("discussion",dto);
    }

    function handleSaint(){
        const dto: saintDTO ={
            saintName: form.saintName,
            saintDescription: form.saintDescription,
            saintFeastDay: form.saintFeastDay,
        }
        save("saint",dto);
    }

    function handleReadings(){
        const dto: readingsDTO = {
            citations: form.citations,
        }
        save("readings",dto);
    }

    function handleFeaturedScripture(){
        const dto: featuredScriptureDTO ={
            featuredScriptureRef: form.featuredScriptureRef,
            featuredScriptureSummary: form.featuredScriptureSummary,
        }
        save("featuredScripture",dto);
    }

    return(
        <div className="flex flex-col items-center">
            <div className="mt-8 text-3xl font-cinzel text-white/[.66]">Update Home Page</div>
            <div className="flex flex-col">
                <input type="text" value={form.discussionTitle} onChange={(e)=>set("saintName",e.target.value)}/>
            </div>

        </div>
    )
}