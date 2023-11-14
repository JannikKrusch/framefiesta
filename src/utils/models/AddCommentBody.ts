import { LoginBody } from "./LoginBody";

export interface AddCommentBody extends LoginBody {
  comment: string;
  blogPostId: string;
}
