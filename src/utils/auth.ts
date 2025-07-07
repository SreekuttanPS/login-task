import type { User } from "../types/authTypes";

export const saveUser = (user: User) => {
  localStorage.setItem(user.email, JSON.stringify(user));
};

export const getUser = (email: string): User | null => {
  const data = localStorage.getItem(email);
  return data ? JSON.parse(data) : null;
};

export const setIsLoggedIn = (bool: boolean) => {
  localStorage.setItem("isLoggedIn", JSON.stringify(bool));
};

export const getIsLoggedIn = (): boolean => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? JSON.parse(isLoggedIn) : false;
};

export const setCurrentUser = (email: string) => {
  localStorage.setItem("currentUser", JSON.stringify(email));
};

export const getCurrentUser = (): string | null => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};
