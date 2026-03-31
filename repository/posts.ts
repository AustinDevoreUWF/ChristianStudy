import prisma from "@/lib/prisma";
import { Discussion } from "@/domain/posts";
import { Comment } from "@/domain/posts";

export interface DiscussionRepo{
    //Find the discussion By Id
    findById(id: number): Promise<Discussion | null>
    findByTitle(title: number):Promise<Discussion | null>
    save();
}
export interface CommentRepo{

}


export class PrismaDiscussionRepo implements DiscussionRepo {
    
    async findById(id:number): Promise<Discussion | null>{
        const data = await prisma.discussion.findUnique({
            where: {id: id},
        });
        if(!data)return null;
        return new Discussion(data.id, data.title!, data.text!)
    }
    findByTitle(title: number):Promise<Discussion | null>
    save();
}
export class PrismaCommentRepo{

}