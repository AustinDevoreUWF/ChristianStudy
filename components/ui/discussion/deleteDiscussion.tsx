'use client'
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Trash2 } from "lucide-react";
//redirect the user to the discussionList after the deletion
export default function DeleteDiscussion({authorId,id}:{authorId:number,id:number}){
    const { user } = useAuth();
    const router = useRouter();
    const [open, setIsOpen] = useState(false);

    async function handleDelete(){
        try{
            const res = await fetch(`/api/discussion/deleteDiscussion?id=${id}`,{
                method:'DELETE'
            });
            //simply the deleted info incase we need it
            const deleted = await res.json()
            router.push("/discussion")
        }catch(e){//whatever goes wrong gets sent here and i just name it(e)
            console.error(e);
            }
    }

    if(user?.userId !== authorId) return null
    
        return(
        <div>
            <button onClick={()=>{setIsOpen(true)}} className="flex justify-center items-center cursor-pointer">
                <Trash2 className="text-white/70"/>
            </button>
            {open && ( //if open=true
                <div className="flex z-10 items-center  justify-center text-white fixed inset-0 bg-black/70">
                <div className="bg-black px-10 py-5 border border-accent-foreground">
                <div className="flex flex-col items-center text-white">
                        <p>Are you sure you want to delete this discussion?</p>
                    <div className="flex gap-4 mt-2">
                        <button onClick={handleDelete} className="cursor-pointer border rounded-md border-white px-2 text-white bg-red-500">Delete</button>
                        <button onClick={()=>setIsOpen(false)} className="cursor-pointer hover:text-white/60 hover:border-white/60 border rounded-md px-2">Cancel</button>
                    </div>
                </div>
                </div>
                </div>
            )}
        </div>
    )
}