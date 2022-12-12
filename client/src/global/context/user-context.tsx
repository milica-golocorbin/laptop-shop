import React from "react";
import { UseQueryResult } from "react-query";
import { AuthError, User } from "firebase/auth";
import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "../../auth/firebase/setup";
// END OF IMPORTS

type Props = {
  children: React.ReactNode;
};

// CONTEXT
export type UserCtxProps = {
  user: UseQueryResult<User, AuthError>;
};
export const UserContext = React.createContext<UserCtxProps | null>(null);

// PROVIDER
export const UserProvider = ({ children }: Props) => {
  // react-query-firebase
  const user = useAuthUser(["user"], auth);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
