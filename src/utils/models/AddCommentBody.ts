import { LoginBody } from "./LoginBody";

export interface AddCommentBody extends LoginBody {
  comment: Comment;
  blogPostId: string;
}
