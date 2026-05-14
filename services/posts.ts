import prisma from "@/lib/prisma";
import { PrismaUserRepository } from "@/repository/users";
import { PrismaDiscussionRepo } from "@/repository/posts";
import { PrismaReplyRepo } from "@/repository/posts";
import { User } from "@/src/domain/users";
import { Discussion, Reply } from "@/src/domain/posts";

import {DiscussionDTO} from "@/src/dto/discussionDTO";

const userRepo = new PrismaUserRepository();
const discussionRepo = new PrismaDiscussionRepo();
const replyRepo = new PrismaReplyRepo();
//Creates A New Discussion
export async function createDiscussion(title:string, text:string,authorId:number):Promise<Discussion>{
    const newDiscussion = new Discussion( title, text, authorId);
    return await discussionRepo.save(newDiscussion);
}
//Create a new Reply
export async function createReply(title:string, text:string, authorId:number, discussionId:number):Promise<Reply>{
    const newReply = new Reply(0,title,text,authorId, discussionId)
    return await replyRepo.save(newReply);
}
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