import { Film } from "../models/Film";
import { Series } from "../models/Series";

export function isInstanceOfResponse(input: unknown): input is Response {
  return input instanceof Response;
}

export function isInstanceOfFilm(object: any): object is Film {
  return "runTime" in object;
}

export function isInstanceOfSeries(object: any): object is Series {
  return "seasons" in object && "episodes" in object;
}
