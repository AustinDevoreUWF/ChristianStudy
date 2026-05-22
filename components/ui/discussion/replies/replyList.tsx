'use client'
import { ReplyDTO } from "@/src/dto/discussionDTO";
import { useState } from "react";
import ReplyButton from "./replyButton";
import Image from "next/image"
export default function ReplyList({ replies }: { replies: ReplyDTO[] }) {
    const [parentId,setParentId] = useState<number|null>(null)

    return (
    <div className="mt-2 pt-2 border-t border-white/19">
        <div className="">
            {replies.length === 0 ? (
                <p>No replies yet. Want to start the conversation?</p>
            ) : (
                replies.map((reply) => (
                    //Actual style goes here:
                    <div key={reply.id}>
                        <div className="pt-2">
                        <div className="flex items-center gap-1 pl-1 pb-2">
                            
                            <div className="w-8 h-8 overflow-hidden rounded-full">
                            <Image src={reply.profilePic ?? "/default-avatar.png"} alt={reply.userName} width={32} height={32} className="w-full h-full object-cover"/>
                            </div>
                            
                            <p className="text-xs text-white pl-1">{reply.userName} -</p>
                            <p className="text-xs text-white/19">{new Date(reply.createdAt).toLocaleDateString()}</p>
                        </div>
                        <p className="text-white text-xl font-cinzel">{reply.title}</p>
                        <p className="mx-5 text-white/70 text-lg pb-3 font-garamond leading-relaxed mb-3">{reply.text}</p>
                        <ReplyButton onReply={() => setParentId(reply.id)} />
                    </div>
                    </div>

                ))
            )}
        </div>
    </div>
)
}