import { createContext } from "react";

export interface AuthContextInterface {
  token: string | null,
  setToken: (token: string | null) => void
}

export const AuthContext = createContext({} as AuthContextInterface)