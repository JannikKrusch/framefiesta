import { MotionPicture } from "./MotionPicture";

export class BlogPost {
  public id: number = 0;
  public comments: string[] = [];
  public paragraphs: string[] = [];
  public motionPicture: MotionPicture = new MotionPicture();
}
