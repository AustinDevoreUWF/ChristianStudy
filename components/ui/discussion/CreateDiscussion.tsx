'use client'
import { useRef, useState } from "react";

interface props {
  user: {
    id: number,
    isAdmin: boolean,
  };
}

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

export default function CreateDiscussion({ user }: props) {
  const [open, setOpen] = useState(false)
  const topicRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)

  if (!user.isAdmin) {
    return (
      <p style={{
        fontFamily: "var(--font-garamond)",
        fontStyle: "italic",
        color: "rgba(255,255,255,0.30)",
        fontSize: "1rem",
      }}>
        You are not permitted to create a discussion.
      </p>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const topic = topicRef.current?.value;
    const content = contentRef.current?.value;

    if (!topic || !content) return alert("Please add a topic and content");

    try {
      const res = await fetch("/api/discussion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, content, authorId: user.id })
      });

      if (!res.ok) throw new Error("Failed to create discussion");

      alert("Discussion created");
      if (topicRef.current) topicRef.current.value = "";
      if (contentRef.current) contentRef.current.value = "";
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
              ref={topicRef}
              placeholder="Topic"
              required
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.60)")}
              onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.10)")}
            />

            {/* Content */}
            <textarea
              ref={contentRef}
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