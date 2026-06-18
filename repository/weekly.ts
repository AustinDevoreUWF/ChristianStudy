import { Weekly, Essay, ScriptureCitation } from "@/src/domain/scripture";
import prisma from "@/src/lib/prisma";
import { WeeklyDTO } from "@/src/dto/discussionDTO";
import { featuredDiscussionDTO, saintDTO, scriptureDTO, featuredScripture } from "@/src/dto/weeklyDTO";

export interface EssayRepository { 
    createEssay(essay: Essay):Promise<Essay|null>
    deleteEssay(id:number):Promise<Essay|null>

    getEssayById(id:number):Promise<Essay|null>
    getAllEssays():Promise<Essay[]>
} 
export interface WeeklyRepository {
    getWeekly():Promise<Weekly | null>

    updateFeaturedDiscussion(input:featuredDiscussionDTO): Promise<Weekly>;
    updateSaint(input:saintDTO): Promise<Weekly>;
    updateScripture(input:scriptureDTO): Promise<Weekly>;
    updateFeaturedScripture(input:featuredScripture): Promise<Weekly>;

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
        return data;
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
            orderBy:{createdAt:"desc"},
        });
        return data.map((d:any)=>new Essay(d.title,d.category,d.text, d.authorId, d.id,d.createdAt))
    }
}

export class PrismaWeeklyRepo implements WeeklyRepository {

    async toDomain(data: any): Promise<Weekly> {
        return new Weekly(
        data.id,
        data.saintName,
        data.saintDescription,
        data.saintFeastDay,
        data.featuredScriptureRef,
        data.featuredScriptureSummary,
        data.discussionTitle,
        data.discussionDescription,
        data.discussionImage,
        data.discussionCloses,
        data.citations?.map((c: any) => new ScriptureCitation(c.reference, c.summary, c.id)) ?? [],
        data.featuredEssays ?? [],
        )
    }


  async getWeekly(): Promise<Weekly | null> {
    const data = await prisma.weekly.findUnique({
      where: { id: 1 },
      include: { citations: true, featuredEssays: true }
    })
    if (!data) return null
    return this.toDomain(data)
  }

  async updateSaint(input: saintDTO): Promise<Weekly> {
    const data = await prisma.weekly.update({
      where: { id: 1 },
      data: {
        saintName: input.saintName,
        saintDescription: input.saintDescription,
        saintFeastDay: input.saintFeastDay,
      }
    })
    return this.toDomain(data)
  }

  async updateScripture(input: scriptureDTO): Promise<Weekly> {
    const data = await prisma.weekly.update({
      where: { id: 1 },
      data: {
        featuredScriptureRef: input.featuredScriptureRef,
        featuredScriptureSummary: input.featuredScriptureSummary,
      }
    })
    return this.toDomain(data)
  }

  async updateFeaturedDiscussion(input: featuredDiscussionDTO): Promise<Weekly> {
    const data = await prisma.weekly.update({
      where: { id: 1 },
      data: {
        discussionTitle: input.discussionTitle,
        discussionDescription: input.discussionDescription,
        discussionImage: input.discussionImage,
        discussionCloses: input.discussionCloses,
      }
    })
    return this.toDomain(data)
  }

  async updateFeaturedScripture(input: featuredScripture): Promise<Weekly> {
    await prisma.scriptureCitation.deleteMany({ where: { weeklyId: 1 } })
    await prisma.scriptureCitation.createMany({
      data: input.citations.map((c) => ({
        reference: c.reference,
        summary: c.summary,
        weeklyId: 1,
      }))
    })
    const data = await prisma.weekly.findUnique({
      where: { id: 1 },
      include: { citations: true, featuredEssays: true }
    })
    return this.toDomain(data)
  }
}