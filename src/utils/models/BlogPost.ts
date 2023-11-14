import { Comment } from "./Comment";
import { MotionPicture } from "./MotionPicture";

export class BlogPost {
  public id: string = "";
  public date: Date = new Date();
  public typeOf: string = "";
  public description: string = "";
  public review: string = "";
  public rating: number = 0;
  public comments: Comment[] = [];
  public relatedMotionPicture: MotionPicture = new MotionPicture();
}
