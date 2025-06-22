"use client";

import {
  createContext,
  ReactNode,
  use,
  useLayoutEffect,
  useState,
} from "react";
import { User, UserContextType } from "@/types";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isUserReady, setIsUserReady] = useState(false);

  const saveUser = async (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  useLayoutEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (err) {
        console.error("Invalid user data in localStorage");
      } finally {
        setIsUserReady(true);
      }
    } else setIsUserReady(true);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, saveUser, isUserReady }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = use(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
