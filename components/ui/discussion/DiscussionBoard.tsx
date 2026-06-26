import DiscussionLink from "@/components/ui/discussion/DiscussionBoardLink"
import { getAllDiscussions } from "@/services/posts";

export default async function DiscussionBoard() {
  const discussions = await getAllDiscussions();

  return (
    <main className="flex justify-center w-full my-4 sm:my-10 lg:my-20 px-4 sm:px-0">
      <div style={{
        backgroundColor: "#080808",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "800px",
        maxHeight: "90vh",
        overflowY: "auto",
        padding: "1rem",
      }} className="sm:p-8">

        {/* Heading */}
        <p style={{
          fontFamily: "var(--font-cinzel)",
          fontSize: "clamp(0.9rem, 5vw, 1.1rem)",
          fontWeight: 400,
          letterSpacing: "0.14em",
          color: "#ffffff",
          marginBottom: "0.35rem",
        }}>
          Discussions
        </p>
        <div style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.20)", marginBottom: "1rem" }} className="sm:mb-8" />

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