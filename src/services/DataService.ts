import { useContext } from "react";
import {
  Controllers,
  CustomError,
  DEFAULT_URL,
  HttpStatusCodes,
  Method,
  StateContext,
  isInstanceOfResponse,
} from "../utils";
export class DataService {
  private controller: Controllers;
  private _abortController: AbortController;
  private _setError: (error: CustomError | undefined) => void =
    useContext(StateContext).setError;

  constructor(controller: Controllers) {
    this.controller = controller;
    this._abortController = new AbortController();
  }

  protected async callEndpointGenericAsync<Type>(
    url: string,
    body?: BodyInit,
    method?: Method
  ): Promise<Type | null> {
    const response = await this.callEndpointAsync(url, body, method);
    const data = await this.handleResponseAsync<Type>(response);
    return data;
  }

  protected async callEndpointBooleanAsync(
    url: string,
    body?: BodyInit,
    method?: Method
  ): Promise<boolean> {
    const response = await this.callEndpointAsync(url, body, method);
    await this.handleResponseAsync(response);
    const successful = this.isVoidCallSuccessful(response);
    return successful;
  }

  private async callEndpointAsync(
    url: string,
    body?: BodyInit,
    method?: Method
  ): Promise<Response | Error> {
    // this._abortController.abort();
    this._abortController = new AbortController();
    console.warn(`${DEFAULT_URL}${this.controller}${url}`);
    const response = await fetch(`${DEFAULT_URL}${this.controller}${url}`, {
      signal: this._abortController.signal,
      mode: "cors",
      method: method ?? Method.Get,
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response;
      })
      .catch((error: Error) => {
        return error;
      });

    return response;
  }

  private async handleResponseAsync<Type>(
    response: Response | Error
  ): Promise<Type | null> {
    try {
      if (isInstanceOfResponse(response)) {
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          this._setError(this.convertToCustomError(response));
          return null;
        }
      }
      this._setError(this.convertToCustomError(response));
      return null;
    } catch (ex) {
      this._setError(this.convertToCustomError(ex));
      return null;
    }
  }

  private isVoidCallSuccessful(response: Response | Error): boolean {
    return isInstanceOfResponse(response) && response.ok;
  }

  private convertToCustomError(input: Response | unknown): CustomError {
    const error = new CustomError();
    if (isInstanceOfResponse(input)) {
      error.message = input.statusText;
      error.statusCode = input.status;
      return error;
    } else {
      const parsed = input as Error;
      error.message = parsed.message;
      error.statusCode = HttpStatusCodes.InternalServerError;
      return error;
    }
  }
}
