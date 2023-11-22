import { IdentificationBody } from "./IdentificationBody";

export interface AddCommentBody extends IdentificationBody {
  comment: string;
  blogPostId: string;
}
