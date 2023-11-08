export const DEFAULT_URL: string = ""; //! Add your backend url here

export enum Controllers {
  Blogs = "blogs",
  User = "user",
}

export const enum Method {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
}

export enum BlogEndPoints {
  GetBlogPosts = "/getBlogPosts",
}

export enum UserEndpoints {
  Register = "/register",
  LogIn = "/login",
  AddComment = "/addComment",
  DeleteComment = "/deleteComment",
}

export enum HttpStatusCodes {
  Ok = 200,
  NotFound = 404,
  InternalServerError = 500,
}
