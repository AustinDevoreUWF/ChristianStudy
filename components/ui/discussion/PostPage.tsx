import prisma from "@/src/lib/prisma"
import { DiscussionDTO, ReplyDTO } from "@/src/dto/discussionDTO";
import ReplyList from "./replies/replyList";
import ReplyButton from "./replies/replyButton";
import CreateReply from "./replies/createReply";


export default async function DiscussionPostPage({discussion,replies,discussionId}:{
    discussion: DiscussionDTO,
    replies: ReplyDTO[],
    discussionId:number,
}){

 return (
        <main>{/*Start at top=0 bottom=0*/}
            <div style={{position:"fixed",left:"2rem",top:0,bottom:0,width:"1px",background:"rgba(255,255,255,0.08)"}} />
            <div style={{position:"fixed",right:"2rem",top:0,bottom:0,width:"1px",background:"rgba(255,255,255,0.08)"}} />

            <div className="p-40 bg-[#080808] min-h-screen">
                <h1 className="font-cinzel text-3xl text-white font-bold">
                    {discussion.title}
                </h1>
                <p className="font-garamond text-white/30 text-lg">
                    By {discussion.userName} &bull; {new Date(discussion.createdAt!).toLocaleDateString()}
                </p>
                <p className=" text-white mt-8">
                    {discussion.text}
                </p>
                <ReplyList replies={replies} discussionId={discussionId}/>
            </div>
        </main>
 )

}
