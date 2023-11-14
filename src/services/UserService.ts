import {
  AddCommentBody,
  Comment,
  Controllers,
  DeleteCommentBody,
  LoginBody,
  Method,
  RegisterBody,
  User,
  UserEndpoints,
} from "../utils";
import { DataService } from "./DataService";

export class UserService extends DataService {
  constructor(controller: Controllers) {
    super(controller);
  }

  public async registerAsync(
    name: string,
    password: string,
    email: string
  ): Promise<User | null> {
    const url = UserEndpoints.Register;
    const body: RegisterBody = {
      name,
      password,
      email,
    };

    return await this.callEndpointGenericAsync<User>(
      url,
      JSON.stringify(body),
      Method.Post
    );
  }

  public async loginAsync(
    userIdentification: string,
    password: string
  ): Promise<User | null> {
    const url = UserEndpoints.LogIn;
    const body: LoginBody = {
      userIdentification,
      password,
    };

    return await this.callEndpointGenericAsync<User>(
      url,
      JSON.stringify(body),
      Method.Post
    );
  }

  public async addCommentAsync(
    userIdentification: string,
    password: string,
    comment: string,
    blogPostId: string
  ): Promise<Comment | null> {
    const url = UserEndpoints.AddComment;
    const body: AddCommentBody = {
      userIdentification,
      password,
      comment,
      blogPostId,
    };

    return await this.callEndpointGenericAsync<Comment>(
      url,
      JSON.stringify(body)
    );
  }

  public async deleteCommentAsync(
    userIdentification: string,
    password: string,
    commentId: string,
    blogPostId: string
  ): Promise<boolean> {
    const url = UserEndpoints.DeleteComment;
    const body: DeleteCommentBody = {
      userIdentification,
      password,
      commentId,
      blogPostId,
    };

    return await this.callEndpointBooleanAsync(
      url,
      JSON.stringify(body),
      Method.Post
    );
  }
}
