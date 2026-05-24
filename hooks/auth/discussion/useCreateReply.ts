import { useState } from "react";
    
//what do i want to do:Create a Reply, if the user types in either field, track it, if the user submits it
//push it to the api route with the data, close the form
//hook for creating a Reply
export default function useCreateReply(){
//call create Reply from service
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

    async function createReply(title:string, text:string , authorId:number,discussionId:number, parentId:number|null){
    setIsLoading(true);
    setError(null);
        try{
        const res = await fetch("/api/discussion/createReply",{
            method:"POST",
            body: JSON.stringify({title,text,authorId,discussionId,parentId}),
        })
        if(!res.ok) throw new Error(`Response Status: ${res.status}`)
        }catch(error:any){
        setError(error)
            console.error(error.message);
        }finally{setIsLoading(false)}
    }
    return {isLoading, error,createReply}
}
