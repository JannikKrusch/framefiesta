import { User } from "../utils";

export class SessionStorageService {
  private readonly _key = "currentUser";

  public setUser(user: User): void {
    const json = JSON.stringify(user);
    sessionStorage.setItem(this._key, json);
  }

  public deleteUser(): void {
    sessionStorage.removeItem(this._key);
  }

  public getUser(): User | null {
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
