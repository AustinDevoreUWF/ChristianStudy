'use client'
import { ReplyDTO } from "@/src/dto/discussionDTO";
import { useState } from "react";
import ReplyButton from "./replyButton";
import Image from "next/image"
import CreateReply from "./createReply";

//returns a ReplyItem with its children 
function ReplyItem({reply, replies, onReply, depth=0}:{
    reply:ReplyDTO,
    replies:ReplyDTO[],
    onReply: (id:number) => void,
    depth?: number,
    }){
        //need to display the authors pfp, name, date of post,
        //need to display Title, Text
        //Actual style goes here:
        const children = replies.filter(x => x.parentId === reply.id)
    return(
            <div className={`pt-4 ${depth > 0 &&depth<3 ?  "ml-8" : ""}`}>
           <div className="border-l border-white/20 pl-4">
            <div className="flex items-center gap-1 pb-2">
                
                <div className="w-7 h-7 overflow-hidden rounded-full">
                <Image src={reply.profilePic ?? "/default-avatar.png"} alt={reply.userName} width={32} height={32} className="w-full h-full object-cover"/>
                </div>
                
                <p className="text-xs text-white pl-1">{reply.userName} -</p>
                <p className="text-xs text-white/19">{new Date(reply.createdAt!).toLocaleDateString()}</p>
            </div>
            <p className="text-white text-xl font-semibold font-cinzel pb-1">{reply.title}</p>
            <p className="mx-2 text-white/70  pb-3 leading-relaxed mb-3">{reply.text}</p>
            </div>
            {/**Pass prop called onReply, with value of reply id, reply id is  */}
            <ReplyButton onReply={() => onReply(reply.id!)} />
            {children.map(child =>(
                <ReplyItem key={child.id} reply={child} replies={replies} onReply={onReply} depth={depth + 1}/>
            ))}    
            
            </div>
    )
};
//here will be the logic for when to display a ReplyItem, which can have children if they have children probably show then first?
export default function ReplyList({ replies,discussionId }: { replies: ReplyDTO[],discussionId:number }) {
    const [parentId,setParentId] = useState<number|null>(null)
    const [open, setOpen] = useState(false)

    const handleReply = (id:number|null)=>{
        console.log("replyId set as: ", id)
        setParentId(id)
        setOpen(true)
    }

    //need to return root replies
    const topLevelReplies = replies.filter(x => x.parentId === null)

    return (
    <div className="mt-2 pt-2 border-t border-white/19">
        <CreateReply discussionId={discussionId} parentId={parentId} open={open} setOpen={setOpen} />
        <ReplyButton onReply={()=>handleReply(null)}/>
        <div className="">
            {replies.length === 0 ? (
                <p>No replies yet. Want to start the conversation?</p>
            ) : (//go over each root reply and search for its children else display root.
                topLevelReplies.map(reply=>(
                    <ReplyItem 
                        key={reply.id}
                        reply={reply}//the single reply
                        replies={replies}//the entire reply list(search for matching parent id to know children)
                        onReply={handleReply}//when clicked, set the parentId
                    />
                ))
            )}
        </div>
    </div>
)
}