import prisma from "@/src/lib/prisma";
import { DiscussionDTO, ReplyDTO } from "@/src/dto/discussionDTO";
import ReplyList from "./replies/replyList";
/*
Pre - Create a component for collecting replies
1. Based on the disscussion_id grab the Title and the content into variables
2. Display replies loop over replies and replies to replies
3. Create a Form that says what is required to reply to a post
 - Something like, Title of response or Thesis of response
 - Then a content response ->
    (take *text* as a bolding effect)
    (allow for links)
    (allow for scripture citations from the reply page)
    (Create something to cite Fathers or Saints or extrabiblical sources?)
    (Length Requirment)
 - 
*/

export default async function DiscussionPostPage({ discussion, replies }: {
  discussion: DiscussionDTO;
  replies: ReplyDTO[];
}) {
  return (
    <main>
      <div className="fixed left-[2rem] top-0 bottom-0 w-[1px] bg-[rgba(255,255,255,0.08)]" />
      <div className="fixed right-[2rem] top-0 bottom-0 w-[1px] bg-[rgba(255,255,255,0.08)]" />

      <div className="bg-[#080808] min-h-screen p-[10rem]">
        <h1 className="font-[var(--font-cinzel)] text-[28px] font-[700] text-white">
          {discussion.title}
        </h1>
        <p className="font-[var(--font-garamond)] italic text-[rgba(255,255,255,0.35)]">
          By {discussion.userName} &bull; {new Date(discussion.createdAt!).toLocaleDateString()}
        </p>
        <p className="font-[var(--font-garamond)] text-[#e8e8e8] mt-[2rem]">
          {discussion.text}
        </p>
        <ReplyList replies={replies} />
      </div>
    </main>
  );
}
