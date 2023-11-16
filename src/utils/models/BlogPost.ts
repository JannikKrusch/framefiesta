import { Comment } from "./Comment";
import { Film } from "./Film";
import { MotionPicture } from "./MotionPicture";
import { Series } from "./Series";

export class BlogPost {
  public id: string = "";
  public date: Date = new Date();
  public typeOf: string = "";
  public description: string = "";
  public review: string = "";
  public rating: number = 0;
  public comments: Comment[] = [];
  //public relatedMotionPicture: MotionPicture = new MotionPicture();
  public relatedMotionPicture: Film | Series = new Film();
}
