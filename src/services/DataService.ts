import { useContext } from "react";
import { Controllers, DEFAULT_URL, Method } from "../utils";
import { useErrorUpdate } from "../utils/hooks/UseErrorUpdate";
import { StateContext } from "../utils/context/StateContext";

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
        this._setError(error);
        return null;
      });

    return response;
  }
}
