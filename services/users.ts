import prisma from "@/src/lib/prisma";
import { PrismaUserRepository, PrismaUserProfileRepository } from "@/repository/users";
import bcrypt from "bcrypt";
import { User, UserProfile} from "@/src/domain/users";
import jwt from "jsonwebtoken"
//This is the service file for Users
//Register Users
//Log-in Users
//Gather user Info for account page
const userRepo = new PrismaUserRepository();
const profileRepo = new PrismaUserProfileRepository();

export function generateToken(user: User): string {
  return jwt.sign(
    { userId: user.id, userName: user.userName },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" } // token expires in 1 hour
  );
}

/*  Tasks:
    1. Check if email already exists
    2. Hash the password
    3. Create User domain entity
    4. Save via repository
    5. Commit transaction
    6. Generate JWT token
 */
export async function registerUser(
    userName:string,
    userEmail:string,
    password:string,
    ): Promise<{user: User; token: string}>{
    
    const existing_user = await userRepo.findUserByEmail(userEmail)
    if (existing_user){
        throw new Error("Email already in use")
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User(userName,userEmail,hashedPassword)
    const savedUser = await userRepo.save(newUser)
    const token = generateToken(savedUser)
    return {user:savedUser, token};
}

export async function loginUser(
    userEmail:string,
    password:string,    
    ):Promise<{user: User; token: string}>{
    
    const user =await userRepo.findUserByEmail(userEmail);
        if(!user) throw new Error("Invalid Credentials")
    
        if(!user.verifyPassword(password)){
            throw new Error("Invalid Credentials");
        }    
    const token = generateToken(user)
    return {user, token}
}
//
export async function getCurrentUser(token:string):Promise<UserProfile|null>{
    //verify the token, and recieve it as an object, specifically tell TS userId is a number 
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {userId:number};
        const userProfile = await profileRepo.getUserProfile(decoded.userId);
    return userProfile;
}

//Call the Repo method to swap PFP's
export async function setPFP(userName:string, profilePic:string):Promise<void>{
    return await profileRepo.updateProfilePic(userName, profilePic);
}