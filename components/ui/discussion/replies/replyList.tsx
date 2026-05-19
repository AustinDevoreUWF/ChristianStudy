import { ReplyDTO } from "@/src/dto/discussionDTO";

export default async function ReplyList({ replies }: { replies: ReplyDTO[] }) {
  return (
    <div className="text-white">
      {replies.map((reply) => (
        <div key={reply.id} className="mb-6">
          <p className="text-[1.125rem] font-bold">{reply.title}</p>
          <p className="text-[1rem] text-[#e8e8e8]">{reply.text}</p>
          <p className="text-sm text-[rgba(255,255,255,0.65)]">{reply.userName}</p>
          <p className="text-sm text-[rgba(255,255,255,0.35)]">{reply.createdAt ? new Date(reply.createdAt).toLocaleString() : ""}</p>
        </div>
      ))}
    </div>
  );
}