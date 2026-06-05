import { Weekly, Essay } from "@/src/domain/scripture";
import prisma from "@/src/lib/prisma";
import { WeeklyDTO } from "@/src/dto/discussionDTO";

export interface EssayRepository { 
    createEssay(essay: Essay):Promise<Essay|null>
    deleteEssay(id:number):Promise<Essay|null>

    getEssayById(id:number):Promise<Essay|null>
    getAllEssays():Promise<Essay[]>
}
export interface WeeklyRepository {
    updateWeeklyScripture(input: WeeklyDTO): Promise<Weekly>;
    getWeeklySripture():Promise<Weekly | null>
}

export class PrismaEssayRepo implements EssayRepository{

    async createEssay(essay: Essay):Promise<Essay|null>{
        const data = await prisma.essay.create({
            data:{
                title: essay.title,
                category: essay.category,
                text: essay.text,
                authorId: essay.authorId,
            }
        });if(!data)return null;
        return new Essay(title,category,text,authorId)
    }
    async deleteEssay(id:number):Promise<Essay|null>{
        const data = await prisma.essay.delete({
            where:{id: id}
        });if(!data)return null;
        return data;
    }
    async getEssayById(id:number):Promise<Essay|null>{
        const data = await prisma.essay.findUnique({
            where: {id: id},
        });
        if(!data) return null;
        return new Essay(data.title, data.category, data.text, data.authorId)
    }
    async getAllEssays():Promise<Essay[]>{
        const data = await prisma.essay.findMany({
            orderBy:{createdAt:"asc"},
        });
        return data.map((d:any)=>new Essay(d.title,d.category,d.text, d.authorId, d.id,d.createdAt))
    }
}

export class PrismaWeeklyRepo implements WeeklyRepository {

    async updateWeeklyScripture(input: WeeklyDTO): Promise<Weekly>{
        const data = await prisma.weekly.update({
            where: {id: 1},
            data: {
                scriptureChapter: input.scriptureChapter,
                scriptureVerse: input.scriptureVerse,
                scriptureBook: input.scriptureBook,
                saintName: input.saintName,
                saintDescription: input.saintDescription,
                saintFeastDay: input.saintFeastDay,
            }
        })
        return new Weekly(
            data.scriptureChapter,
            data.scriptureVerse,
            data.scriptureBook,
            data.saintName,
            data.saintDescription,
            data.saintFeastDay
        );
    }
    
    async getWeeklySripture():Promise<Weekly | null>{
        const data = await prisma.weekly.findUnique({
            where: {id:1}
        })
        if(!data) return null;
        return new Weekly(
            data.scriptureChapter,
            data.scriptureVerse,
            data.scriptureBook,
            data.saintName,
            data.saintDescription,
            data.saintFeastDay,
        );
    }

}