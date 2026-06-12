'use client'
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useCreateDiscussion from "@/hooks/auth/discussion/useCreateDiscussion";
import { useAuth } from "../context/AuthContext";
export const inputStyle: React.CSSProperties = {
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

export default function CreateDiscussion() {
  const [open, setOpen] = useState(false)
  const titleRef = useRef<HTMLInputElement>(null)
  const textRef = useRef<HTMLTextAreaElement>(null)
  const { createDiscussion } = useCreateDiscussion();
  const {user,loading, refreshUser} = useAuth();
  const router = useRouter();


  if(loading) return null;

  if(!user) return null;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const title = titleRef.current?.value;
    const text = textRef.current?.value;
    if(!title||!text)return alert("Please fill in all fields");
    
    try {
      await createDiscussion(title, text, user.userId);
        console.log("Discussion created");
        if (titleRef.current) titleRef.current.value = "";
        if (textRef.current) textRef.current.value = "";
        router.refresh();
      setOpen(false)
    } catch (err) {
        console.error(err);
        alert("There was an error creating the discussion");
    }

  }

  return (
    <div>
      {/* Trigger button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            top: "7.5rem",
            right: "1.5rem",
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
          New Discussion
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
              maxWidth: "520px",
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
              New Discussion
            </p>
            <div style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.20)", marginBottom: "2rem" }} />

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
              rows={5}
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
  )
}