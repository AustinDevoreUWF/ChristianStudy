import prisma from "@/lib/prisma";
import { PrismaUserRepository } from "@/repository/users";
import { PrismaDiscussionRepo } from "@/repository/posts";
import { PrismaReplyRepo } from "@/repository/posts";
import bcrypt from "bcrypt";
import { User } from "@/domain/users";
import { Discussion, Reply } from "@/domain/posts";
import jwt from "jsonwebtoken"

const discussionRepo = new PrismaDiscussionRepo();
const replyRepo = new PrismaReplyRepo();
//Creates A New Discussion
export async function createDiscussion(title:string, text:string,authorId:number):Promise<Discussion>{
    const newDiscussion = new Discussion(0,title, text, authorId)
    return await discussionRepo.save(newDiscussion);
}
//Create a new Reply
export async function createReply(title:string, text:string, authorId:number, discussionId:number):Promise<Reply>{
    const newReply = new Reply(0,title,text,authorId, discussionId)
    return await replyRepo.save(newReply);
}