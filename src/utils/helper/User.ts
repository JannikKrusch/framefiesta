import { User, UserFE } from "..";

export function convertUserToUserFE(user: User, password: string): UserFE {
  const userFE = new UserFE();
  userFE.comments = user.comments;
  userFE.email = user.email;
  userFE.id = user.id;
  userFE.name = user.name;
  userFE.password = password;

  return userFE;
}
