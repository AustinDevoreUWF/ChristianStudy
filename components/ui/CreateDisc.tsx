import prisma from "@/lib/prisma";
import { Comment, Discussion, User } from "@/app/generated/prisma";

//pass in the user if the user is an admin they can create a discussion post
export default function CreateDisc(User){
if(User.isAdmin )
    return(

)
}