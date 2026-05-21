import { PrismaUserRepository, PrismaUserProfileRepository } from "@/repository/users";
import { PrismaDiscussionRepo, PrismaReplyRepo } from "@/repository/posts";
import { Discussion, Reply } from "@/src/domain/posts";

import {DiscussionDTO} from "@/src/dto/discussionDTO";
import { ReplyDTO } from "@/src/dto/discussionDTO";

const userRepo = new PrismaUserRepository();
const profileRepo = new PrismaUserProfileRepository();
const discussionRepo = new PrismaDiscussionRepo();
const replyRepo = new PrismaReplyRepo();


    //Creates A New Discussion
export async function createDiscussion(title:string, text:string,authorId:number):Promise<Discussion>{
    const newDiscussion = new Discussion( title, text, authorId);
    return await discussionRepo.save(newDiscussion);
}
    //Gets All Discussions with Author Name
export async function getAllDiscussions():Promise<DiscussionDTO[]>{
    const discussions = await discussionRepo.findAll();
    return Promise.all(discussions.map(async (x) =>{
        const user = await userRepo.findUserById(x.authorId);
        return {
        id:x.id,
        title: x.title,
        text: x.text,
        authorId: x.authorId,
        userName: user!.userName,
        createdAt: x.createdAt,
        }
    }))
}
    //Get a Discussion by ID
export async function getDiscussionById(id:number):Promise<DiscussionDTO | null>{
        const discussion = await discussionRepo.findById(id);
        if(!discussion) return null;
        const user = await userRepo.findUserById(discussion.authorId)
        return {
            id:discussion.id,
            title: discussion.title,
            text: discussion.text,
            authorId: discussion.authorId,
            userName: user!.userName,
            createdAt:discussion.createdAt,
        }
}
    //Create a reply (NEEDS SERIOUS REWORK)
export async function createReply(title:string, text:string, authorId:number, discussionId:number):Promise<Reply>{
    const newReply = new Reply(0,title,text,authorId, discussionId)
    return await replyRepo.save(newReply);
}

    //This is used to get all replies for a discussion
export async function getAllReplies(id:number): Promise<ReplyDTO[]>{
    const replies = await replyRepo.findAllReplies(id);//get all replies as array
    return Promise.all(replies.map( async (reply)=>{//over each reply 
        const user = await userRepo.findUserById(reply.authorId)//get user for each reply
        const profileInfo = await profileRepo.getUserProfile(reply.authorId)//get the author of each reply
        return{
            id: reply.id,
            title: reply.title,
            text: reply.text,
            authorId: reply.authorId,
            discussionId: reply.discussionId,
            userName: user!.userName,
            profilePic: profileInfo?.profilePic ?? null,
            parentId:reply?.parentId,
            createdAt: reply.createdAt,
        }
    }))
}

 