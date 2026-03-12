'use client'
import { useRef} from "react";

interface props{
    user:{
        id: number,
        isAdmin: boolean,
    };
}

//pass in the user of interface props
export default function CreateDiscussion({user}: props){
/*
Add a useRef to track the Topic, and the content,
we use these refs to update after submition.
*/
const topicRef = useRef<HTMLTextAreaElement>(null)
const contentRef = useRef<HTMLTextAreaElement>(null)

if(!user.isAdmin){
    return <p id="InvalidUser">You're not allowed to create a discussion yet!</p>
}
const handleSubmit = async (e: React.SubmitEvent)=>{
    e.preventDefault();
    //grabs the current if something is input, value grabs as a string
    const topic = topicRef.current?.value;
    const content = contentRef.current?.value;

    if(!topic ||!content) return alert("Please add a Topic and give content");

    try{
        const res = await fetch("/api/discussion",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                topic,
                content,
                authorId:user.id
            })
        });
    if (!res.ok) throw new Error("Failed to create discussion");

        alert("Discussion Created");
        //if the references have data in them, refresh that upon submit
        if(topicRef.current) topicRef.current.value = "";
        if(contentRef.current) contentRef.current.value = "";
    }catch(err){
        console.error(err);
        alert("There was an error creating the Discussion");
    }
}

return(
 <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md p-4 border rounded shadow">
  <textarea ref={topicRef} placeholder="Discussion Topic" required
  className="border p-2 rounded" />
  
  <textarea ref={contentRef} placeholder="Discussion content" required
  className="border p-2 rounded" />
  
  <button type="submit" className="bg-blue-500 text-white p-2 rounded">
    Create Discussion
  </button>
</form>
)
}