import {
  BlogEndPoints,
  Controllers,
  DEFAULT_URL,
  UserEndpoints,
} from "../utils";

export class UrlService {
  private readonly _url: string;
  private readonly _controller: string;

  constructor(controller: Controllers) {
    this._url = DEFAULT_URL;
    this._controller = controller;
  }

  public buildUrl(
    endpoint: BlogEndPoints | UserEndpoints,
    params?: Array<[string, string]>
  ): string {
    const parameters: string = params ? this.addParameters(params) : "";

    return `${this._url}/${this._controller}/${endpoint}${parameters}`;
  }

  public createParameterArrayTuple(
    key: string,
    values: Array<unknown>
  ): Array<[string, string]> {
    let tuples: Array<[string, string]> = [];
    values.forEach((value: unknown) =>
      tuples.push(this.createParameterTuple(key, value))
    );

    return tuples;
  }

  public createParameterTuple(key: string, value: unknown): [string, string] {
    const tuple: [string, string] = [key, value as string];
    return tuple;
  }

  private addParameters(params: Array<[string, string]>): string {
    let parameters: string = "";

    if (params.length > 0) {
      const [key, value] = params[0];
      parameters += `?${key}=${value}`;
    }

    if (params.length > 1) {
      for (const [key, value] of params.slice(1)) {
        parameters += `&${key}=${value}`;
      }
    }

    return parameters.replaceAll(" ", "%20").replaceAll(":", "%3A");
  }
}
