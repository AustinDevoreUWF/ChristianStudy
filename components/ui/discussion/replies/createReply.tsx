'use client'
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useCreateReply from "@/hooks/auth/discussion/useCreateReply";
import { useAuth } from "@/components/ui/context/AuthContext";
import ReplyButton from "./replyButton";
const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(255,255,255,0.10)",
  color: "#e8e8e8",
  fontFamily: "var(--font-garamond)",
  fontSize: "1.05rem",
  letterSpacing: "0.04em",
  padding: "0.7rem 0",
  outline: "none",
  transition: "border-color 0.2s",
  resize: "none",
}
//parentId can be either null(first time) or have a val here. 
export default function CreateReply({discussionId,parentId,open, setOpen}:{discussionId:number, parentId:number | null,open:boolean, setOpen:(val:boolean)=>void}) {
  const titleRef = useRef<HTMLInputElement>(null)
  const textRef = useRef<HTMLTextAreaElement>(null)
  const { createReply } = useCreateReply();
  const {user,loading, refreshUser} = useAuth();
  const router = useRouter();
  if(!open) return null

  if(loading) return null;
    
  if(!user){
     alert("Please sign in to Reply")
     return null;
  } 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const title = titleRef.current?.value;
    const text = textRef.current?.value;
    if(!title||!text)return alert("Please fill in all fields");
    
    try {//title,text,discussionId,authorId,parentId
      await createReply(title, text, discussionId ,user.userId, parentId);
        alert("Reply created");
        if (titleRef.current) titleRef.current.value = "";
        if (textRef.current) textRef.current.value = "";
        router.refresh();
      setOpen(false)
    } catch (err) {
        console.error(err);
        alert("There was an error creating the reply");
    }

  }
  //if the button was not pressed dont return this whole display
  return (
       <div style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
        }}>
            <form onSubmit={handleSubmit} style={{
                background: "#080808",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "2rem",
                width: "100%",
                maxWidth: "520px",
                display: "flex",
                flexDirection: "column",
            }}>
                <p style={{
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    letterSpacing: "0.14em",
                    color: "#ffffff",
                    marginBottom: "0.35rem",
                }}>
                    New Reply
                </p>
                <div style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.20)", marginBottom: "2rem" }} />

                <input
                    ref={titleRef}
                    placeholder="Title"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.60)")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.10)")}
                />

                <textarea
                    ref={textRef}
                    placeholder="Reply to this?"
                    required
                    rows={5}
                    style={{ ...inputStyle, marginTop: "1.4rem", borderBottom: "1px solid rgba(255,255,255,0.10)" }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.60)")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.10)")}
                />

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "2rem" }}>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        style={{
                            background: "transparent",
                            border: "1px solid rgba(255,255,255,0.12)",
                            color: "rgba(255,255,255,0.35)",
                            fontFamily: "var(--font-cinzel)",
                            fontSize: "0.72rem",
                            letterSpacing: "0.20em",
                            textTransform: "uppercase",
                            padding: "0.6rem 1.2rem",
                            cursor: "pointer",
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        style={{
                            background: "transparent",
                            border: "1px solid rgba(255,255,255,0.20)",
                            color: "rgba(255,255,255,0.60)",
                            fontFamily: "var(--font-cinzel)",
                            fontSize: "0.72rem",
                            letterSpacing: "0.20em",
                            textTransform: "uppercase",
                            padding: "0.6rem 1.2rem",
                            cursor: "pointer",
                        }}
                    >
                        Reply
                    </button>
                </div>
            </form>
        </div>
  )
}