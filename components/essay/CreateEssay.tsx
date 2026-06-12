'use client'

import { useState } from "react";
import { useRef } from "react";
import { useAuth } from "../ui/context/AuthContext";
import { inputStyle } from "../ui/discussion/CreateDiscussion";
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
            const authorId = user?.userId;
                const title = titleRef.current?.value
                const category = categoryRef.current?.value
                const text = textRef.current?.value

                const res = await fetch("/api/essay",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({title,category,text,authorId,})
                })
                if(!res.ok) throw new Error("Failed to create Essay");
                setOpen(false)
            }catch(err:any){
            return console.log(err);
        }
        
    }
    return(
    <div>
      {/* Trigger button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.20)",
            color: "rgba(255,255,255,0.60)",
            fontFamily: "var(--font-cinzel)",
            fontSize: "0.75rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            padding: "0.65rem 1.25rem",
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#ffffff";
            e.currentTarget.style.color = "#080808";
            e.currentTarget.style.borderColor = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "rgba(255,255,255,0.60)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)";
          }}
        >
          New Essay
        </button>
      )}

      {/* Modal overlay */}
      {open && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 50,
        }}>
          <form
            onSubmit={handleSubmit}
            style={{
              background: "#080808",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "2rem",
              width: "100%",
              maxWidth: "1200px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Heading */}
            <p style={{
              fontFamily: "var(--font-cinzel)",
              fontSize: "1.1rem",
              fontWeight: 400,
              letterSpacing: "0.14em",
              color: "#ffffff",
              marginBottom: "0.35rem",
            }}>
              New Essay
            </p>
            <div style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.20)", marginBottom: "2rem" }} />

            {/* Category */}
            <input
                ref={categoryRef}
                placeholder="Category"
                required
                style={inputStyle}
                onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.60)")}
                onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.10)")}
            />
            {/* Topic */}
            <input
              ref={titleRef}
              placeholder="Title"
              required
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.60)")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.10)")}
            />

            {/* Content */}
            <textarea
              ref={textRef}
              placeholder="What do you want to discuss?"
              required
              rows={20}
              style={{ ...inputStyle, marginTop: "1.4rem", borderBottom: "1px solid rgba(255,255,255,0.10)" }}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.60)")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.10)")}
            />

            {/* Actions */}
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
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.30)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.35)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
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
                  transition: "background 0.2s, color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.color = "#080808";
                  e.currentTarget.style.borderColor = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,0.60)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)";
                }}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
    )}
