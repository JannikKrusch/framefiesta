import { useContext } from "react";
import {
  CustomError,
  HttpStatusCodes,
  StateContext,
  isInstanceOfResponse,
} from "../utils";

export class ResponseServie {
  private _setError: (error: CustomError | undefined) => void =
    useContext(StateContext).setError;

  public async handleResponseAsync<Type>(
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
      if (response.name !== "AbortError") {
        // Fehlerbehandlung, falls nicht abgebrochen
        this._setError(this.convertToCustomError(response));
      } else {
        console.warn("REQUEST ABORTED");
      }

      return null;
    } catch (ex) {
      this._setError(this.convertToCustomError(ex));
      return null;
    }
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
