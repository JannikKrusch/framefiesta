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

export enum Admin {
  DeleteUser = "/deleteUser",
  DeleteBlog = "/deleteBlog",
}

export enum User {
  Register = "/register",
  LogIn = "/login",
  DeleteComment = "/deleteComment",
}
