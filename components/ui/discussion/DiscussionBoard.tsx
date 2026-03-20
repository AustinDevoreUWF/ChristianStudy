export default async function DiscussionBoard() {
  const res = await fetch("http://localhost:3000/api/discussion", {
    cache: "no-store"
  })
  const discussions = await res.json()

  return (
    <main className="flex justify-center w-full my-40">
      <div style={{
        backgroundColor: "rgba(10, 8, 6, 0.92)",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "800px",
        maxHeight: "80vh",
        overflowY: "auto",
        padding: "2rem",
      }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: "#e8e2d9",
          lineHeight: 1.2,
          marginBottom: "1.5rem",
        }} className="font-cinzel">Discussions</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {discussions.map((d: any) => (
            <a href={`/discussion/${d.id}`} key={d.id} style={{
              display: "block",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
              padding: "1rem 1.25rem",
              cursor: "pointer",
              textDecoration: "none",
            }} className="hover:bg-white/10 transition-colors duration-200">
              <h2 style={{ color: "#e8e2d9", fontWeight: 600, marginBottom: "0.25rem" }}>{d.topic}</h2>
              <p style={{ color: "#a09080", fontSize: "0.9rem", marginBottom: "0.5rem" }}
              >{d.content.length > 100 ? d.content.slice(0, 100) + "..." : d.content}</p>
              <small style={{ color: "#6b5f52", fontSize: "0.75rem" }}>
                By {d.author?.name ?? "Unknown"} • {new Date(d.createdAt).toLocaleDateString()}
              </small>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}