import { DataService } from ".";
import {
  AddCommentBody,
  AuthenticationInformationBody,
  Comment,
  Controllers,
  Method,
  RegisterBody,
  User,
  UserEndpoints,
  UserParameters,
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
    const url = this.urlService.buildUrl(UserEndpoints.Register);
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
    const url = this.urlService.buildUrl(UserEndpoints.LogIn);
    const body: AuthenticationInformationBody = {
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
    const parameters: Array<[string, string]> = [
      this.urlService.createParameterTuple(
        UserParameters.BlogPostId,
        blogPostId
      ),
    ];

    const url = this.urlService.buildUrl(UserEndpoints.AddComment, parameters);
    const body: AddCommentBody = {
      userIdentification,
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
    const parameters: Array<[string, string]> = [
      this.urlService.createParameterTuple(
        UserParameters.BlogPostId,
        blogPostId
      ),
      this.urlService.createParameterTuple(UserParameters.CommentID, commentId),
    ];
    const url = this.urlService.buildUrl(
      UserEndpoints.DeleteComment,
      parameters
    );
    const body: AuthenticationInformationBody = {
      userIdentification,
      password,
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
    const url = this.urlService.buildUrl(UserEndpoints.DeleteUser);
    const body: AuthenticationInformationBody = {
      userIdentification,
      password,
    };

    return await this.callEndpointBooleanAsync(
      url,
      JSON.stringify(body),
      Method.Delete
    );
  }
}
