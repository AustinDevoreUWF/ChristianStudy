import prisma from "@/src/lib/prisma"
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

export default async function DiscussionPostPage({discussion,replies}:{
    discussion: DiscussionDTO,
    replies: ReplyDTO[]
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
                <p className="font-garamond text-white mt-8">
                    {discussion.text}
                </p>
                <ReplyList replies={replies}/>
            </div>
        </main>
 )

}
