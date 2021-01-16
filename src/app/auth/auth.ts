export enum Role {
  user = 'User',
  admin = 'Admin',
}

export const ROLES = [Role.user, Role.admin];

export interface User {
  /* eslint-disable @typescript-eslint/naming-convention */
  first_name: string;
  last_name: string;
  role: Role;
  token: string;
  /* eslint-enable */
}

export interface LoginParams {
  email: string;
  password: string;
}

const KEY_LOGGED_USER = 'loggedUser';

export const setActiveUser = (user: User) => {
  localStorage.setItem(KEY_LOGGED_USER, JSON.stringify(user));
};

export const getActiveUser = () => {
  const user = localStorage.getItem(KEY_LOGGED_USER);
  if (user) {
    return JSON.parse(user) as User;
  }
  return null;
};

export const remoreActiveUser = () => {
  localStorage.removeItem(KEY_LOGGED_USER);
};
