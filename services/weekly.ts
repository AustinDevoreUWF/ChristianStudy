import prisma from "@/src/lib/prisma";
import { PrismaWeeklyRepo, PrismaEssayRepo } from "@/repository/weekly";
import { WeeklyDTO } from "@/src/dto/discussionDTO";
import { Weekly, Essay } from "@/src/domain/scripture";
import { PrismaUserRepository } from "@/repository/users";
import { featuredDiscussionDTO, featuredScripture, saintDTO, scriptureDTO } from "@/src/dto/weeklyDTO";

//INSTANTIATE REPOS
const weeklyRepo = new PrismaWeeklyRepo()
const essayRepo = new PrismaEssayRepo()
const userRepo = new PrismaUserRepository();

export async function updateFeaturedDiscussion(input: featuredDiscussionDTO):Promise<Weekly>{
    return await weeklyRepo.updateFeaturedDiscussion(input)
}
export async function updateSaint(input: saintDTO):Promise<Weekly>{
    return await weeklyRepo.updateSaint(input)
}
export async function updateScripture(input: scriptureDTO):Promise<Weekly>{
    return await weeklyRepo.updateScripture(input)
}
export async function updateFeaturedScripture(input: featuredScripture):Promise<Weekly>{
    return await weeklyRepo.updateFeaturedScripture(input)
}


//ESSAY REPOSITORY
export async function createEssay(title:string,category:string,text:string,authorId:number):Promise<Essay|null>{
    const essay = new Essay(title,category,text,authorId)
    return await essayRepo.createEssay(essay);
}
export async function deleteEssay(id:number):Promise<Essay|null>{
    return await essayRepo.deleteEssay(id);
}
export async function getEssayById(id:number):Promise<Essay|null>{
    return await essayRepo.getEssayById(id);
}
export async function getAllEssays():Promise<Essay[]>{
    const essays = await essayRepo.getAllEssays();
    return Promise.all(essays.map( async (item:any)=>{
        const user = await userRepo.findUserById(item.authorId);
        return{
            id:item.id,
            title:item.title,
            category:item.category,
            text:item.text,
            authorId:item.authorId,
            createdAt:item.createdAt,
            userName:user!.userName,
        }

    }))
}