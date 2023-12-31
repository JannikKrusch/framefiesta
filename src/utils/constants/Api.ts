export const DEFAULT_URL: string = "https://localhost:44302"; //! Add your backend url here

export enum Controllers {
  FrameFiesta = "api/FrameFiesta",
}

export const enum Method {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

export enum BlogEndPoints {
  GetBlogPosts = "blogPosts",
}

export enum UserEndpoints {
  Register = "register",
  LogIn = "login",
  AddComment = "comment",
  DeleteComment = "comment",
  DeleteUser = "user",
}

export enum UserParameters {
  Name = "name",
  UserIdentification = "userIdentification",
  Email = "email",
  Password = "password",
  Comment = "comment",
  CommentID = "commentID",
  BlogPostId = "blogId",
}

export enum HttpStatusCodes {
  NotFound = 404,
  InternalServerError = 500,
}
