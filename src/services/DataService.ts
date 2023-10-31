import { useContext } from "react";
import { Controllers, DEFAULT_URL, HttpStatusCodes, Method } from "../utils";
import { StateContext } from "../utils/context/StateContext";
import { isInstanceOfResponse } from "../utils/helper/InstanceOf";

export class DataService {
  public controller: Controllers;
  private _url: String = DEFAULT_URL;
  private _setError: (error: Error | undefined) => void =
    useContext(StateContext).setError;

  constructor(controller: Controllers) {
    this.controller = controller;
  }

  protected async callEndpointAsync(
    url: string,
    body?: BodyInit,
    method?: Method
  ): Promise<Response | Error> {
    const response = await fetch(url, {
      mode: "cors",
      method: method ? method : Method.Get,
      body: body,
    })
      .then((response) => {
        return response;
      })
      .catch((error: Error) => {
        return error;
      });

    return response;
  }

  protected async handleResponseAsync<Type>(
    response: Response | Error
  ): Promise<Type | null> {
    try {
      if (isInstanceOfResponse(response)) {
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          //TODO update ERROR
          this._setError(this.convertToError(response));
          return null;
        }
      }
      //TODO update ERROR
      this._setError(this.convertToError(response));
      return null;
    } catch (ex) {
      this._setError(this.convertToError(ex));
      return null;
    }
  }

  private convertToError(input: Response | unknown): Error {
    const error = new Error();
    if (isInstanceOfResponse(input)) {
      error.message = input.statusText;
      error.name = input.status.toString();
      return error;
    } else {
      const parsed = input as Error;
      error.message = parsed.message;
      error.name = HttpStatusCodes.InternalServerError.toString();
      return error;
    }
  }
}
