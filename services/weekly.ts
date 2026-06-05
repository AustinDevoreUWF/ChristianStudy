import prisma from "@/src/lib/prisma";
import { PrismaWeeklyRepo, PrismaEssayRepo } from "@/repository/scripture";
import { WeeklyDTO } from "@/src/dto/discussionDTO";
import { Weekly, Essay } from "@/src/domain/scripture";

//INSTANTIATE REPOS
const weeklyRepo = new PrismaWeeklyRepo()
const essayRepo = new PrismaEssayRepo()

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
    return await essayRepo.getAllEssays();
}