import DiscussionLink from "@/components/ui/discussion/DiscussionBoardLink"
import { getAllDiscussions } from "@/services/posts";

export default async function DiscussionBoard() {
  const discussions = await getAllDiscussions();

  return (
    <main className="flex justify-center w-full my-20">
      <div style={{
        backgroundColor: "#080808",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "800px",
        maxHeight: "90vh",
        overflowY: "auto",
        padding: "2rem",
      }}>

        {/* Heading */}
        <p style={{
          fontFamily: "var(--font-cinzel)",
          fontSize: "1.1rem",
          fontWeight: 400,
          letterSpacing: "0.14em",
          color: "#ffffff",
          marginBottom: "0.35rem",
        }}>
          Discussions
        </p>
        <div style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.20)", marginBottom: "2rem" }} />

        {/* Discussion list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {discussions.map((d: any) => (
           //need to get and created_time
           <DiscussionLink
              key={d.id}
              id={d.id}
              topic={d.title}
              content={d.text}
              authorName={d.userName}
              createdAt={d.createdAt}
            />
          ))}
        </div>

      </div>
    </main>
  )
}