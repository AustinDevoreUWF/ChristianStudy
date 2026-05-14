// domain/User.ts
import bcrypt from "bcrypt";

export class UserProfile{
  userId: number;
  profilePic: string |null;

  constructor(
  userId: number,
  profilePic: string|null=null){//the = null because user doesnt need any pfp when registering.
    if(!userId) throw new Error("userId not provided");
    this.userId = userId;
    this.profilePic = profilePic;
  }

}

export class User {
  id: number|null;
  userName: string;
  userEmail: string;
  private passwordHash: string; //hashpassword
  isAdmin:boolean;

  constructor(userName: string, userEmail: string, passwordHash: string, isAdmin: boolean = false,  userId: number | null = null) {
    if (!userName) throw new Error("Username required");
    if (!passwordHash) throw new Error("Password required");
    if(!userEmail) throw new Error("Email not provided");

    this.id = userId;
    this.userName = userName;
    this.userEmail = userEmail;
    this.passwordHash = passwordHash;
    this.isAdmin = isAdmin;
  }
  public getPasswordHash(): string {
    return this.passwordHash;
  }

  // Verify a password attempt
  public verifyPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.passwordHash);
  }

  // Only expose safe user info
  public toJSON() {
    return {
      userId: this.id,
      userName: this.userName,
      userEmail: this.userEmail
    };
  }
}
