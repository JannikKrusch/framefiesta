import { IdentificationBody } from "./IdentificationBody";

export interface DeleteCommentBody extends IdentificationBody {
  commentId: string;
  blogPostId: string;
}
