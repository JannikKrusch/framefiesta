import { Comment } from "./Comment";

export class User {
  public id: string = "";
  public isAdmin: boolean = false;
  public name: string = "";
  public email: string = "";
  public password: string = "";
  public comments: Comment[] = [];
}
