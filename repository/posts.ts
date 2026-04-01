import prisma from "@/lib/prisma";
import { Discussion } from "@/domain/posts";
import { Reply } from "@/domain/posts";

export interface DiscussionRepo{
    //Find the discussion By Id
    findById(id: number): Promise<Discussion | null>
    findByTitle(title: string):Promise<Discussion[] | null>
    findByauthorId(authorId:number):Promise<Discussion[] | null>
    save(discussion: Discussion):Promise<Discussion>
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
    async save(discussion:Discussion):Promise<Discussion>{
        const data = await prisma.discussion.create({
            data:{
                title: discussion.title,
                text: discussion.text,
                authorId: discussion.authorId,

            }
        })
        return new Discussion(data.id, data.title, data.text, data.authorId);
    }
}



export interface replyRepo{
    //Looks for a reply with a specific ID, returns 1
    findById(id:number):Promise<Reply | null>
    //Looks for all replys written by an author
    findByauthorId(authorId : number):Promise<Reply[] | null>
    //Returns all replys under a discussion(This will need serious formatting)
    findAllreplysUnderDiscussion(discussionId:number):Promise<Reply[]| null>
    save(reply:Reply):Promise<Reply>
}
export class PrismareplyRepo implements replyRepo{
    async findById(id:number):Promise<Reply|null>{
        const data = await prisma.reply.findUnique({
            where: {id: id},
        });if(!data)return null;
        return new Reply(data.id!, data.text!, data.title!, data.authorId!, data.discussionId)
    }
    async findByauthorId(authorId:number):Promise<Reply[]|null>{
        const data = await prisma.reply.findMany({
            where: {authorId},
        });
        return data.map(d=>
            new Reply(d.id, d.text!, d.title, d.authorId,d.discussionId)
        )
    }
    //might return alot
    async findAllreplysUnderDiscussion(discussionId:number):Promise<Reply[]|null>{
        const data = await prisma.reply.findMany({
            where: {discussionId},
        });
        if(!discussionId)return null
        return data.map(d=>
            new Reply(d.id, d.text!, d.title, d.authorId,d.discussionId)
        )
    }
    async save(reply:Reply):Promise<Reply>{
        const data = await prisma.reply.create({
            data: {
                title: reply.title,
                text: reply.text,
                authorId: reply.authorId,
                discussionId: reply.discussionId, 
            }
        })
        return new Reply(data.id, data.text, data.title, data.authorId,data.discussionId)
    }
}