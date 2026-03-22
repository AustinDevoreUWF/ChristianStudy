'use client'

export default function DiscussionLink({ id, topic, content, authorName, createdAt }: {
  id: number
  topic: string
  content: string
  authorName: string
  createdAt: string
}) {
  return (
    <a
      href={`/discussion/${id}`}
      style={{
        display: "block",
        backgroundColor: "transparent",
        border: "none",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "1rem 0",
        cursor: "pointer",
        textDecoration: "none",
        transition: "opacity 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      <h2 style={{
        fontFamily: "var(--font-cinzel)",
        color: "#ffffff",
        fontSize: "1rem",
        fontWeight: 400,
        letterSpacing: "0.06em",
        marginBottom: "0.4rem",
      }}>
        {topic}
      </h2>
      <p style={{
        fontFamily: "var(--font-garamond)",
        color: "rgba(255,255,255,0.35)",
        fontSize: "1rem",
        fontStyle: "italic",
        marginBottom: "0.5rem",
      }}>
        {content.length > 100 ? content.slice(0, 100) + "..." : content}
      </p>
      <small style={{
        fontFamily: "var(--font-garamond)",
        color: "rgba(255,255,255,0.20)",
        fontSize: "0.85rem",
      }}>
        By {authorName} &bull; {new Date(createdAt).toLocaleDateString()}
      </small>
    </a>
  )
}