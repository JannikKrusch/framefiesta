import { Film } from "../models/Film";
import { Series } from "../models/Series";

export function isInstanceOfResponse(input: unknown): input is Response {
  return input instanceof Response;
}

export function isInstanceOfFilm(input: unknown): input is Film {
  return input instanceof Film;
}
export function isInstanceOfSeries(input: unknown): input is Series {
  return input instanceof Series;
}
