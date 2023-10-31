export const DEFAULT_URL: string = "";

export enum Controllers {
  Blogs = "blogs",
  Admin = "admin",
  User = "user",
}

export const enum Method {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
}

export enum BlogEndPoints {
  //returns list
  GetMotionPictures = "/motionPictures",
  GetFilms = "/getFilms",
  GetSeries = "/getSeries",
  //returns single item
  GetFilmBy = "/getFilmById",
  GetSeriesById = "/getSeriesById",
}

export enum AdminEndpoints {
  DeleteUser = "/deleteUser",
  DeleteBlog = "/deleteBlog",
}

export enum UserEndpoints {
  Register = "/register",
  LogIn = "/login",
  DeleteComment = "/deleteComment",
}

export enum HttpStatusCodes {
  Ok = 200,
  NotFound = 404,
  InternalServerError = 500,
}
