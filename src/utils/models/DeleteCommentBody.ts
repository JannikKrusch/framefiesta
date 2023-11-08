import { LoginBody } from "./LoginBody";

export interface DeleteCommentBody extends LoginBody {
  commentId: string;
  blogPostId: string;
}
