import prisma from "@/lib/prisma";
import { User, UserProfile } from "@/domain/users";


export interface UserRepository{
    //find a user by name
    findUserByName(userName:string):Promise<User|null>
    //find a user by id
    findUserById(id:number):Promise<User|null>
    //find a user by email(IMPORTANT!)
    findUserByEmail(userEmail:string):Promise<User|null>
    //saves a user to the DB
    save(user:User):Promise<User>
}
export class PrismaUserRepository implements UserRepository{
    private toDomain(data: any):User{
        return new User(data.id, data.userName, data.userEmail, data.passwordHash)
    }
//finding a user by there userId
    async findUserById(id: number): Promise<User | null> {
        const data = await prisma.user.findUnique({
            where: {id},
        })
        if(!data)return null
        return this.toDomain(data);
    }
//finding a user by their UNIQUE name
    async findUserByName(userName:string):Promise<User|null>{
        const data = await prisma.user.findUnique({
            where: {userName},
        })
        if(!data) return null;
        return this.toDomain(data);
    }
    async findUserByEmail(userEmail:string):Promise<User|null>{
        const data = await prisma.user.findUnique({
            where: {userEmail},
        })
        if(!data) return null;
        return this.toDomain(data);
    }
    //creating a user here
    async save(user:User):Promise<User>{
        try{
        const data = await prisma.user.create({
            data:{
                userName: user.userName,
                userEmail: user.userEmail,
                passwordHash: user.getPasswordHash(),
                //create a userProfile each registration
                profile:{
                    create:{
                        profilePic:"",
                        tags: [],
                    }
                }
            }
        })
        return this.toDomain(data);
        }catch(err:any){
            console.error("Prisma full error:", JSON.stringify(err, null, 2));
        throw err;
        }
    }

}
export interface UserProfileRepository{
    updateProfilePic(userName:string, profilePic: string):Promise<UserProfile | null>;
    //updateProfileTag(userName:string, tags:[]):Promise<UserProfile|null>;
}
export class PrismaUserProfileRepository implements UserProfileRepository{
    async updateProfilePic(userName:string, profilePic: string):Promise<UserProfile | null>{
        const user = await prisma.user.findUnique({
            where:{userName},
        })
        if(!user) return null;
        const data = await prisma.userProfile.update({
            where:{userId:user.id},
            data:{profilePic}
        })
        return {
            userId:data.userId,
            userName:userName,
            profilePic:data.profilePic ??"",
        }
    };
}