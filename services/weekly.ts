import prisma from "@/src/lib/prisma";
import { PrismaWeeklyRepo, PrismaEssayRepo } from "@/repository/scripture";
import { WeeklyDTO } from "@/src/dto/discussionDTO";
import { Weekly, Essay } from "@/src/domain/scripture";
import { PrismaUserRepository } from "@/repository/users";

//INSTANTIATE REPOS
const weeklyRepo = new PrismaWeeklyRepo()
const essayRepo = new PrismaEssayRepo()
const userRepo = new PrismaUserRepository();

//recieves input of type WeeklyDTO, passes input through to udpate function in DB
export async function setWeeklyValues(input:WeeklyDTO):Promise<Weekly|null>{
    return await weeklyRepo.updateWeeklyScripture(input)
}
export async function getWeeklyValues():Promise<WeeklyDTO|null>{
    return await weeklyRepo.getWeeklySripture()
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