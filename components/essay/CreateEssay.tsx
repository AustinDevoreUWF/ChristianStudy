'use client'

import { useState } from "react";
import { useRef } from "react";
import { useAuth } from "../ui/context/AuthContext";
// COMPONENT TO CREATE ESSAYS. RECIEVES USER INPUT AND PASSES INTO FETCH
//is a component

export default function CreateEssay(){
    const titleRef = useRef<HTMLInputElement>(null)
    const categoryRef = useRef<HTMLInputElement>(null)
    const textRef = useRef<HTMLTextAreaElement>(null) 
    const {user, loading} = useAuth();
    const [open, setOpen] = useState(false);

    if(loading) return null;
    if(!user?.isAdmin) return null;

    async function handleSubmit(e:React.SubmitEvent){
        e.preventDefault()
        try{
                const title = titleRef.current?.value
                const category = categoryRef.current?.value
                const text = textRef.current?.value

                const res = await fetch("/api/essay",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title,
                        category,
                        text,
                    })
                })
            }catch(err:any){
            return console.log(err);
        }
    }
    return(//title:string,category:string,text:string,authorId:number
        <div>
            {!open && (<button onClick={()=>(setOpen(true))} className="border border-red-500">Create Essay</button>) }
            { open && (
            <form onSubmit={handleSubmit}
                style={{
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.75)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 50,}}>
                <input ref={titleRef} placeholder="Title" />
                <input ref={categoryRef} placeholder="Category" />
                <textarea ref={textRef} placeholder="Text" />
            </form>
            )}
        </div>

    );
}
