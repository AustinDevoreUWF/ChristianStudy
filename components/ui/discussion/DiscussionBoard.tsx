import DiscussionLink from "@/components/ui/discussion/DiscussionBoardLink";
import { getAllDiscussions } from "@/services/posts";

export default async function DiscussionBoard() {
  const discussions = await getAllDiscussions();

  return (
    <main className="flex justify-center w-full my-20">
      <div className="w-full max-w-[800px] max-h-[90vh] overflow-y-auto rounded-[12px] border border-[rgba(255,255,255,0.08)] bg-[#080808] p-8">
        <p className="font-[var(--font-cinzel)] text-[1.1rem] font-[400] tracking-[0.14em] text-white mb-[0.35rem]">Discussions</p>
        <div className="mb-8 h-[1px] w-[32px] bg-[rgba(255,255,255,0.20)]" />

        <div className="flex flex-col gap-4">
          {discussions.map((d: any) => (
            <DiscussionLink key={d.id} id={d.id} topic={d.title} content={d.text} authorName={d.userName} createdAt={d.createdAt} />
          ))}
        </div>
      </div>
    </main>
  );
}
