import {
  Controllers,
  LoginBody,
  RegisterBody,
  User,
  UserEndpoints,
} from "../utils";
import { DataService } from "./DataService";

export class UserService extends DataService {
  constructor(controller: Controllers) {
    super(controller);
  }

  public async registerAsync(
    name: string,
    password: string,
    email: string
  ): Promise<User | null> {
    const url = UserEndpoints.Register;
    const body: RegisterBody = {
      name,
      password,
      email,
    };

    const response = await this.callEndpointAsync(url, JSON.stringify(body));
    const data = await this.handleResponseAsync<User>(response);
    return data;
  }

  public async loginAsync(
    userIdentification: string,
    password: string
  ): Promise<User | null> {
    const url = UserEndpoints.LogIn;
    const body: LoginBody = {
      userIdentification: userIdentification,
      password: password,
    };

    const response = await this.callEndpointAsync(url, JSON.stringify(body));
    const data = await this.handleResponseAsync<User>(response);
    return data;
  }
}
