"use client";

import {
  createContext,
  ReactNode,
  use,
  useLayoutEffect,
  useState,
} from "react";
import { User, UserContextType } from "@/types";
import { decodeToken } from "@/lib";
import showToast from "@/components/UsedShadcn/UseToast";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isUserReady, setIsUserReady] = useState(false);

  const saveUser = async (token: string) => {
    if (!token) return;

    const user = decodeToken(token) as User;
    setUser(user);
    localStorage.setItem("token", token);
    showToast({
      title: `Welcome ${user.name}`,
      description: "You are logged in",
    }).success();
  };

  const logout = () => {
    if (isUserReady && !user) return;

    setUser(null);
    localStorage.removeItem("token");
  };

  useLayoutEffect(() => {
    const stored = localStorage.getItem("token");
    if (stored) {
      try {
        setUser(decodeToken(stored) as User);
      } catch (err) {
        console.error("Invalid user data in localStorage", err);
      } finally {
        setIsUserReady(true);
      }
    } else setIsUserReady(true);
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, saveUser, isUserReady, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = use(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
