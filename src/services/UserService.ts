import {
  AddCommentBody,
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

    const response = await this.callEndpointAsync(url, JSON.stringify(body));
    const data = await this.handleResponseAsync<User>(response);
    return data;
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

    const response = await this.callEndpointAsync(url, JSON.stringify(body));
    const data = await this.handleResponseAsync<User>(response);
    const user = new User();
    user.email = "TEST_USER@gmail.com";
    user.id = "1";
    user.isAdmin = true;
    user.password = password;
    return user;
  }

  public async addCommentAsync(
    userIdentification: string,
    password: string,
    comment: Comment,
    blogPostId: string
  ): Promise<void | null> {
    const url = UserEndpoints.Register;
    const body: AddCommentBody = {
      userIdentification,
      password,
      comment,
      blogPostId,
    };

    const response = await this.callEndpointAsync(
      url,
      JSON.stringify(body),
      Method.Post
    );
    const data = await this.handleResponseAsync<void>(response);
    return data;
  }

  public async deleteCommentAsync(
    userIdentification: string,
    password: string,
    commentId: string,
    blogPostId: string
  ): Promise<void | null> {
    const url = UserEndpoints.Register;
    const body: DeleteCommentBody = {
      userIdentification,
      password,
      commentId,
      blogPostId,
    };

    const response = await this.callEndpointAsync(
      url,
      JSON.stringify(body),
      Method.Post
    );
    const data = await this.handleResponseAsync<void>(response);
    return data;
  }
}
