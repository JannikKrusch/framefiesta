import { Film } from "../models/Film";
import { Series } from "../models/Series";

export function isInstanceOfResponse(input: unknown): input is Response {
  return input instanceof Response;
}

export function isInstanceOfFilm(input: object): input is Film {
  return "runTime" in input;
}

export function isInstanceOfSeries(input: object): input is Series {
  return "seasons" in input && "episodes" in input;
}
