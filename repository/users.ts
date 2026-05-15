import prisma from "@/src/lib/prisma";
import { User, UserProfile } from "@/src/domain/users";


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
export interface UserProfileRepository{
    getUserProfile(id:number):Promise<UserProfile|null>;

    updateProfilePic(userName: string, profilePic: string): Promise<void>;    
    //updateProfileTag(userName:string, tags:[]):Promise<UserProfile|null>;
}

export class PrismaUserRepository implements UserRepository{
    private toDomain(data: any):User{
        return new User(data.userName, data.userEmail, data.passwordHash, data.isAdmin,data.id||null);
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
    //Finding a user by their UNIQUE email
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


export class PrismaUserProfileRepository implements UserProfileRepository{
    
    //user can update their profile pic.
    async updateProfilePic(userName: string, profilePic: string): Promise<void> {
        const user = await prisma.user.findUnique({ where: { userName } });
        if (!user) throw new Error("User not found");
        await prisma.userProfile.update({
            where: { userId: user.id },
            data: { profilePic },
        });
    }

    //get a user profile by their username, returns an DTO not a domain entity, since mixed.
    async getUserProfile(id:number){
        const user = await prisma.user.findUnique({
            where: {id: id},
        })
        if(!user) return null;
        const profile = await prisma.userProfile.findUnique({
            //where UserProfiles userId is the same as the users id.
            where: {userId: user.id},
        })
        if(!profile)return null;
        return{
            userId: user.id,
            userName: user.userName,
            userEmail: user.userEmail,
            profilePic: profile.profilePic,
            isAdmin: user.isAdmin
        };
    };
}