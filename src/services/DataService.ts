import { Controllers, Method, isInstanceOfResponse } from "../utils";
import { UrlService } from "./UrlService";
import { ResponseServie } from "./ResponseService";
export class DataService {
  protected readonly urlService: UrlService;
  private readonly _responseService: ResponseServie;
  private _abortController: AbortController;

  constructor(controller: Controllers) {
    this.urlService = new UrlService(controller);
    this._responseService = new ResponseServie();
    this._abortController = new AbortController();
  }

  public abortAllRequests(): void {
    this._abortController.abort();
    this._abortController = new AbortController();
  }

  protected async callEndpointGenericAsync<Type>(
    url: string,
    body?: BodyInit,
    method?: Method
  ): Promise<Type | null> {
    const response = await this.callEndpointAsync(url, body, method);
    const data = await this._responseService.handleResponseAsync<Type>(
      response
    );
    return data;
  }

  protected async callEndpointBooleanAsync(
    url: string,
    body?: BodyInit,
    method?: Method
  ): Promise<boolean> {
    const response = await this.callEndpointAsync(url, body, method);
    await this._responseService.handleResponseAsync(response);
    const successful = this.isVoidCallSuccessful(response);
    return successful;
  }

  private async callEndpointAsync(
    url: string,
    body?: BodyInit,
    method?: Method
  ): Promise<Response | Error> {
    this.abortAllRequests();
    const response = await fetch(url, {
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

  private isVoidCallSuccessful(response: Response | Error): boolean {
    return isInstanceOfResponse(response) && response.ok;
  }
}
