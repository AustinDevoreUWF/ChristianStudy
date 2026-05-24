import prisma from "@/src/lib/prisma";
import { Discussion } from "@/src/domain/posts";
import { Reply } from "@/src/domain/posts";

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
        return new Discussion(data.title!, data.text!, data.authorId!,data.createdAt,data.id, )
    }
    //Find by Title(Can return many)
    async findByTitle(title: string):Promise<Discussion[] | null>{
        const data = await prisma.discussion.findMany({
            where: { title },
        });
        return data.map(d => new Discussion(d.title, d.text, d.authorId, d.createdAt, d.id)
        )
    }
    //returns an array of all Discussions made by a User
    async findByauthorId(authorId: number): Promise<Discussion[] | null> {
        const data = await prisma.discussion.findMany({
            where: {authorId},
        });
        return data.map(d => 
            new Discussion(d.title!, d.text!, d.authorId!, d.createdAt, d.id)
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
        return new Discussion(data.title, data.text, data.authorId, data.createdAt, data.id);
    }
    async findAll():Promise<Discussion[]>{
        const data = await prisma.discussion.findMany({
            orderBy:{createdAt:"asc"}
        });
        return data.map(d => new Discussion(d.title!, d.text!, d.authorId!, d.createdAt, d.id))
    }

}



export interface ReplyRepo{
    //Looks for a reply with a specific ID, returns 1
    findById(id:number):Promise<Reply | null>
    //Looks for all replys written by an author
    findByauthorId(authorId : number):Promise<Reply[] | null>
    //Returns all replys under a discussion(This will need serious formatting)
    findAllReplies(discussionId:number):Promise<Reply[]>
    //createReply(text: string, title: string, userId: string,discussionId: string, parentId?: number):Promise<Reply>
    save(reply:Reply):Promise<Reply>
}
export class PrismaReplyRepo implements ReplyRepo{
     private toDomain(data: any):Reply{
         console.log("toDomain data:", data);
            return new Reply(data.title, data.text, data.authorId, data.discussionId, data?.parentId ,data.createdAt, data.id || null);
     }
    async findById(id:number):Promise<Reply|null>{
        const data = await prisma.reply.findUnique({
            where: {id: id},
        });if(!data)return null;
        return this.toDomain(data)
    }
    async findByauthorId(authorId:number):Promise<Reply[]|null>{
        const data = await prisma.reply.findMany({
            where: {authorId},
        });
        return data.map(d=>
            this.toDomain(data)
        )
    }
    //might return alot
    async findAllReplies(discussionId:number):Promise<Reply[]>{
        const data = await prisma.reply.findMany({
            where: {discussionId},
            orderBy: {createdAt: "asc"}
        });
        if(!discussionId)return []
        return data.map(d=>
            this.toDomain(d)
        )
    }
    /**
    async createReply(text: string, title: string, userId: string,discussionId: number, parentId?: number):Promise<Reply>{
        
        return 
    }
  */
    async save(reply:Reply):Promise<Reply>{
        const data = await prisma.reply.create({
            data: {
                title: reply.title,
                text: reply.text,
                authorId: reply.authorId,
                discussionId: reply.discussionId,
                parentId:reply?.parentId,
            }
        })
        return this.toDomain(data)
    }
}