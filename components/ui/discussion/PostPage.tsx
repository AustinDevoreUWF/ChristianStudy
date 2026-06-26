import prisma from "@/src/lib/prisma"
import { DiscussionDTO, ReplyDTO } from "@/src/dto/discussionDTO";
import ReplyList from "./replies/replyList";
import ReplyButton from "./replies/replyButton";
import CreateReply from "./replies/createReply";
import DeleteDiscussion from "./deleteDiscussion";


export default async function DiscussionPostPage({discussion,replies,discussionId}:{
    discussion: DiscussionDTO,
    replies: ReplyDTO[],
    discussionId:number,
}){

 return (
        <main>{/*Start at top=0 bottom=0*/}
            <div className="hidden sm:block fixed left-2rem top-0 bottom-0 w-px bg-white/10" />
            <div className="hidden sm:block fixed right-2rem top-0 bottom-0 w-px bg-white/10" />

            <div className="p-4 sm:p-10 lg:p-15 pt-10 bg-[#080808] min-h-screen">
                <h1 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
                    {discussion.title}
                </h1>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <p className="font-garamond text-white/30 text-sm sm:text-base lg:text-lg leading-relaxed">
                        By {discussion.userName} &bull; {new Date(discussion.createdAt!).toLocaleDateString()}
                    </p>
                    <DeleteDiscussion authorId={discussion.authorId} id={discussionId}/>
                </div>
                <p className="text-white/70 mt-6 sm:mt-8 whitespace-pre-wrap font-garamond text-base sm:text-lg lg:text-xl leading-relaxed break-words">
                    {discussion.text}
                </p>
                <ReplyList replies={replies} discussionId={discussionId}/>
            </div>
        </main>
 )

}
