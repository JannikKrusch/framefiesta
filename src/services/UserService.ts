import { DataService } from ".";
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
    //'https://localhost:44302/api/FrameFiesta/comment?userIdentification=322432&blogId=1&comment=test'
    const url =
      UserEndpoints.AddComment +
      `?userIdentification=${userIdentification}&blogId=${blogPostId}`;
    const body: AddCommentBody = {
      password,
      comment,
    };

    return await this.callEndpointGenericAsync<Comment>(
      url,
      JSON.stringify(body),
      Method.Put
    );
  }

  public async deleteCommentAsync(
    userIdentification: string,
    password: string,
    commentId: string,
    blogPostId: string
  ): Promise<boolean> {
    //https://localhost:44302/api/FrameFiesta/comment?userIdentification=1&blogId=2&commentId=3
    const url =
      UserEndpoints.DeleteComment +
      `?userIdentification=${userIdentification}&blogId=${blogPostId}&commentId=${commentId}`;
    const body: DeleteCommentBody = {
      password,
      commentId,
      blogPostId,
    };

    return await this.callEndpointBooleanAsync(
      url,
      JSON.stringify(body),
      Method.Delete
    );
  }

  public async deleteUserAsync(
    userIdentification: string,
    password: string
  ): Promise<boolean> {
    console.warn(password);
    //  https://localhost:44302/api/FrameFiesta/user?userIdentification=Julia
    // 'https://localhost:44302/api/FrameFiesta/user?userIdentification=erwwwe'
    const url =
      UserEndpoints.DeleteUser + `?userIdentification=${userIdentification}`;
    const body = {
      password,
    };
    console.warn(body);

    return await this.callEndpointBooleanAsync(
      url,
      JSON.stringify(password),
      Method.Delete
    );
  }
}
