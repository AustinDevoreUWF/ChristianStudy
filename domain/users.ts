// domain/User.ts
import bcrypt from "bcrypt";

export class User {
  userId: number;
  userName: string;
  userEmail: string;
  private passwordHash: string; //hashbrown password

  constructor(userId: number, userName: string, userEmail:string ,password: string) {
    if (!userName) throw new Error("Username required");
    if (!password) throw new Error("Password required");
    if(!userEmail) throw new Error("Email not provided");

    this.userId = userId;
    this.userName = userName;
    this.userEmail = userEmail;
    this.passwordHash = this.hashPassword(password);
  }

  // Hash the password using bcrypt
  private hashPassword(password: string): string {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
  }

  // Verify a password attempt
  public verifyPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.passwordHash);
  }

  // Only expose safe user info
  public toJSON() {
    return {
      userId: this.userId,
      userName: this.userName,
      userEmail: this.userEmail
    };
  }
}
