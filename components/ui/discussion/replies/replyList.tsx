'use client'
import { ReplyDTO } from "@/src/dto/discussionDTO";
import { useState } from "react";
import ReplyButton from "./replyButton";
import Image from "next/image"

//returns a ReplyItem with its children 
function ReplyItem({reply, replies, onReply}){

    return()
}

export default function ReplyList({ replies }: { replies: ReplyDTO[] }) {
    const [parentId,setParentId] = useState<number|null>(null)
    const topLevelReplies = replies.filter(i => i.parentId === null)
    const childReplies = replies.filter(i=>i.parentId != null)//gives all responses that are replies to replies
    //need to return replies that have no parentId
    //need to return replies that have parentId
    return (
    <div className="mt-2 pt-2 border-t border-white/19">
        <div className="">
            {replies.length === 0 ? (
                <p>No replies yet. Want to start the conversation?</p>
            ) : (
                replies.map((reply) => (
                    
                    //Actual style goes here:
                    <div key={reply.id} className="mb-8 pl-4 border-l border-white/20">
                        <div className="pt-2">
                        <div className="flex items-center gap-1 pb-2">
                            
                            <div className="w-7 h-7 overflow-hidden rounded-full">
                            <Image src={reply.profilePic ?? "/default-avatar.png"} alt={reply.userName} width={32} height={32} className="w-full h-full object-cover"/>
                            </div>
                            
                            <p className="text-xs text-white pl-1">{reply.userName} -</p>
                            <p className="text-xs text-white/19">{new Date(reply.createdAt).toLocaleDateString()}</p>
                        </div>
                        <p className="text-white text-xl font-semibold font-cinzel pb-1">{reply.title}</p>
                        <p className="mx-2 text-white/70  pb-3 leading-relaxed mb-3">{reply.text}</p>
                        <ReplyButton onReply={() => setParentId(reply.id)} />
                    </div>
                    </div>

                ))
            )}
        </div>
    </div>
)
}