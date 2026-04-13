import { UserController } from "@/controllers/user.controller";

const userController = new UserController()

export async function POST(req:Request){
    return userController.login(req);
}