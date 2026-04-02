import prisma from "@/lib/prisma";
import { PrismaUserRepository } from "@/repository/users";
import bcrypt from "bcrypt";
import { User } from "@/domain/users";
import jwt from "jsonwebtoken"
//This is the service file for Users
//Register Users
//Log-in Users
//Gather user Info for account page
const repo = new PrismaUserRepository();

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
    
    const existing_user = await repo.findUserByEmail(userEmail)
    if (existing_user){
        throw new Error("Email already in use")
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User(0,userName,userEmail,hashedPassword,)
    const savedUser = await repo.save(newUser)
    const token = generateToken(savedUser)
    return {user:savedUser, token};
}

export async function loginUser(
    userEmail:string,
    password:string,    
    ):Promise<{user: User; token: string}>{
    
    const user =await repo.findUserByEmail(userEmail);
        if(!user) throw new Error("Invalid Email")
    
        if(!user.verifyPassword(password)){
            throw new Error("Invalid Password");
        }

    return {user:User, token}
}