import { Comment } from "./Comment";
import { Film } from "./Film";
import { Series } from "./Series";

export class BlogPost {
  public id: string = "";
  public date: Date = new Date();
  public typeOf: string = "";
  public description: string = "";
  public review: string = "";
  public comments: Comment[] = [];
  public relatedMotionPicture: Film | Series = new Film();
}
