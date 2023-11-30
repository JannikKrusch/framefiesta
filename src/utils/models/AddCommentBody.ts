import { AuthenticationInformationBody } from "..";

export interface AddCommentBody extends AuthenticationInformationBody {
  comment: string;
}
