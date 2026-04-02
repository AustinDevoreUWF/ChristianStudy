import prisma from "@/lib/prisma";
import { PrismaUserRepository } from "@/repository/users";
import { PrismaDiscussionRepo } from "@/repository/posts";
import { PrismaReplyRepo } from "@/repository/posts";
import bcrypt from "bcrypt";
import { User } from "@/domain/users";
import { Discussion, Reply } from "@/domain/posts";
import jwt from "jsonwebtoken"
const discussionRepo = new PrismaDiscussionRepo();
//Creates A New Discussion
export async function createDiscussion(title:string, text:string,authorId:number):Promise<Discussion>{
    const newDiscussion = new Discussion(0,title, text, authorId)
    return await discussionRepo.save(newDiscussion);
}