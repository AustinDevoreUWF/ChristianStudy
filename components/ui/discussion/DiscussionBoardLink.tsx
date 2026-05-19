'use client'

export default function DiscussionLink({ id, topic, content, authorName, createdAt }: {
  id: number;
  topic: string;
  content: string;
  authorName: string;
  createdAt: string;
}) {
  return (
    <a
      href={`/discussion/${id}`}
      className="block bg-transparent border-b border-[rgba(255,255,255,0.08)] py-4 text-left no-underline transition-opacity duration-200 ease-in-out hover:opacity-60"
    >
      <h2 className="font-[var(--font-cinzel)] text-[1rem] font-[400] tracking-[0.06em] text-white mb-[0.4rem]">{topic}</h2>
      <p className="font-[var(--font-garamond)] text-[1rem] italic text-[rgba(255,255,255,0.35)] mb-[0.5rem]">
        {content.length > 70 ? content.slice(0, 70) + "..." : content}
      </p>
      <small className="font-[var(--font-garamond)] text-[0.85rem] text-[rgba(255,255,255,0.20)]">
        By {authorName} • {new Date(createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </small>
    </a>
  );
}