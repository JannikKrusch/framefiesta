import { useContext } from "react";
import { Controllers, DEFAULT_URL, HttpStatusCodes, Method } from "../utils";
import { useErrorUpdate } from "../utils/hooks/UseErrorUpdate";
import { StateContext } from "../utils/context/StateContext";
import { Http2ServerResponse } from "http2";
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
    method?: Method
  ): Promise<Response | null> {
    const response = await fetch(url, {
      mode: "cors",
      method: method ? method : Method.Get,
      //   body,
    })
      .then((response) => {
        return response;
      })
      .catch((error: Error) => {
        return null;
      });

    return response;
  }

  protected async handleResponse<Type>(
    response: Response | Error
  ): Promise<Type | null> {
    try {
      if (isInstanceOfResponse(response)) {
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          //TODO  update ERROR
          return null;
        }
      }
      //TODO  update ERROR
      return null;
    } catch (ex) {
      this._setError(ex as Error);
      return null;
    }
  }
}
