'use client'
import { useRef, useState} from "react";


interface props{
    user:{
        id: number,
        isAdmin: boolean,
    };
}

//pass in the user of interface props
export default function CreateDiscussion({user}: props){
const [open,setOpen] = useState(false)
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
        setOpen(false)

    }catch(err){
        console.error(err);
        alert("There was an error creating the Discussion");
    }
}

return (
<div>
  {/* Top-right button */}
  {!open && (
    <button
      onClick={() => setOpen(true)}
      className="fixed top-30 right-4 px-6 py-3 rounded shadow text-[#e8e2d9]"
      style={{
        fontFamily: "var(--font-cinzel)",
        background: "rgba(10, 8, 6, 0.92)",
        border: "1px solid rgba(180, 160, 140, 0.2)",
        backdropFilter: "blur(2px)",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "rgba(30,20,15,0.92)")}
      onMouseLeave={e => (e.currentTarget.style.background = "rgba(10,8,6,0.92)")}
    >
      Start a discussion?
    </button>
  )}

  {/* Centered form overlay */}
  {open && (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-lg p-6 rounded shadow-lg"
        style={{
          background: "rgba(10, 8, 6, 0.92)",
          border: "1px solid rgba(180, 160, 140, 0.2)",
          backdropFilter: "blur(2px)",
        }}
      >
        <input
          ref={topicRef}
          placeholder="Discussion Title"
          required
          className="border border-gray-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#a09080] bg-transparent text-[#e8e2d9]"
          style={{ fontFamily: "var(--font-cinzel)" }}
        />
        <textarea
          ref={contentRef}
          placeholder="What do you want to talk about?"
          required
          className="border border-gray-500 p-2 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#a09080] bg-transparent text-[#e8e2d9]"
          style={{ fontFamily: "var(--font-garamond)" }}
        />

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded text-[#e8e2d9] hover:text-[#a09080]"
            style={{
              background: "transparent",
              border: "1px solid rgba(180, 160, 140, 0.2)",
            }}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-2 rounded text-[#e8e2d9] hover:text-[#a09080]"
            style={{
              background: "rgba(180, 160, 140, 0.2)",
              border: "1px solid rgba(180, 160, 140, 0.4)",
              backdropFilter: "blur(2px)",
            }}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  )}
</div>
  );
}