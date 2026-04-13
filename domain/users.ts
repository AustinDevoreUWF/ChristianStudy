// domain/User.ts
import bcrypt from "bcrypt";

export class UserProfile{
  userId: number;
  userName: string;
  profilePic: string;
  constructor(
  userId: number,
  userName: string,
  profilePic: string,){
    if(!userId) throw new Error("userId not provided");
    if(!userName) throw new Error("userName not provided");
    this.userId = userId;
    this.userName = userName;
    this.profilePic = profilePic;
  }

}

export class User {
  id: number;
  userName: string;
  userEmail: string;
  private passwordHash: string; //hashpassword

  constructor(userId: number, userName: string, userEmail:string ,passwordHash: string) {
    if (!userName) throw new Error("Username required");
    if (!passwordHash) throw new Error("Password required");
    if(!userEmail) throw new Error("Email not provided");

    this.id = userId;
    this.userName = userName;
    this.userEmail = userEmail;
    this.passwordHash = passwordHash;
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
