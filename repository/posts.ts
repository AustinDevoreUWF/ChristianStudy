import prisma from "@/lib/prisma";
import { Discussion } from "@/domain/posts";
import { Comment } from "@/domain/posts";

export interface DiscussionRepo{
    //Find the discussion By Id
    findById(id: number): Promise<Discussion | null>
    findByTitle(title: string):Promise<Discussion[] | null>
    findByauthorId(authorId:number):Promise<Discussion[] | null>
}

export class PrismaDiscussionRepo implements DiscussionRepo {
    //Find by the unique ID(only returns 1)
    async findById(id:number): Promise<Discussion | null>{
        const data = await prisma.discussion.findUnique({
            where: {id: id},
        });
        if(!data)return null;
        return new Discussion(data.id, data.title!, data.text!, data.authorId!)
    }
    //Find by Title(Can return many)
    async findByTitle(title: string):Promise<Discussion[] | null>{
        const data = await prisma.discussion.findMany({
            where: { title },
        });
        return data.map(d => new Discussion(d?.id,d.title!,d.text!,d.authorId!)
        )
    }
    //returns an array of all Discussions made by a User
    async findByauthorId(authorId: number): Promise<Discussion[] | null> {
        const data = await prisma.discussion.findMany({
            where: {authorId},
        });
        return data.map(d => 
            new Discussion(d.id, d.title!, d.text!, d.authorId!)
  );
    }
}



export interface CommentRepo{
    findById(id:number):Promise<Comment | null>
    findByauthorId(authorId : number):Promise<Comment | null>
    findAllCommentsUnderDiscussion(discussionId:number):Promise<Comment[]| null>
}
export class PrismaCommentRepo implements CommentRepo{
    async findById(id:number):Promise<Comment|null>{
        const data = await prisma.comment.findUnique({
            where: {id: id},
        });if(!data)return null;
        return new Comment(data.id!, data.text!, data.title!, data.authorId!)
    }
    async findByauthorId(authorId:number):Promise<Comment|null>{
        const data = await prisma.comment.findMany({
            where: {authorId},
        });
        return
    }
    findAllCommentsUnderDiscussion(discussionId:number):Promise<Comment[]|null>{
        return
    }
}