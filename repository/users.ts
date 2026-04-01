import { User } from "@/domain/users";

export interface UserRepository{
    //find a user by name
    findUserByName():{}
    //find a user by id
    findUserById():{}
}
export class PrismaUserRepository implements UserRepository{

}