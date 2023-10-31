import { Controllers, User } from "../utils";
import { DataService } from "./DataService";

export class UserService extends DataService {
  constructor(controller: Controllers) {
    super(controller);
  }

  public async registerAsync(
    userName: string,
    password: string
  ): Promise<User | null> {
    const response = await this.callEndpointAsync("");
    const data = await this.handleResponseAsync<User>(response);
    return data;
  }

  public async loginAsync(
    userName: string,
    password: string
  ): Promise<User | null> {
    const response = await this.callEndpointAsync("");
    const data = await this.handleResponseAsync<User>(response);
    return data;
  }
}
