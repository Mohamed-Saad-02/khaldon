import { User } from "./api";

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  saveUser: (user: User) => void;
  isUserReady: boolean;
  logout: () => void;
}
