import { MotionPicture } from "./MotionPicture";

export class BlogPost {
  public id: number = 0;
  public date: Date = new Date();
  public typeOf: string = "";
  public paragraphs: string[] = [];
  public comments: Comment[] = [];
  public relatedMotionPicture: MotionPicture = new MotionPicture();
}
