import { UserFE } from "../utils";

export class SessionStorageService {
  private readonly _key: string;

  constructor() {
    this._key = "CURRENT_USER";
  }

  public setUser(user: UserFE): void {
    const json = JSON.stringify(user);
    sessionStorage.setItem(this._key, json);
  }

  public deleteUser(): void {
    sessionStorage.removeItem(this._key);
  }

  public getUser(): UserFE | null {
    const item = sessionStorage.getItem(this._key);
    if (item) {
      try {
        const user = JSON.parse(item);
        return user;
      } catch {
        return null;
      }
    }
    return null;
  }
}
