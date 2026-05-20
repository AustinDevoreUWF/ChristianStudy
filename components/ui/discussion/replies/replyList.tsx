import { ReplyDTO } from "@/src/dto/discussionDTO";

export default async function ReplyList({ replies }: { replies: ReplyDTO[] }) {
    return (
    <div>
    <hr />
        <div className="">
            {replies.length === 0 ? (
                <p>No replies yet. Want to start the conversation?</p>
            ) : (
                replies.map((reply) => (
                    //Actual style goes here:
                    <div key={reply.id}>
                        <p className="text-sm text-white ">{reply.userName}</p>
                        <p className="text-white text-xl">{reply.title}</p>
                        <p className="mx-5 text-white ">{reply.text}</p>
                        <p>{new Date(reply.createdAt).toLocaleDateString()}</p>
                    </div>

                ))
            )}
        </div>
    </div>
)
}