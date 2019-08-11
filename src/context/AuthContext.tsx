import React, { createContext, FC, useState } from "react";
import firebase from "../utils/firebase";

interface Context {
  isLoggedIn: boolean;
  register: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<Context>({
  isLoggedIn: false,
  register: () => {},
  login: () => {},
  logout: () => {}
});

export const AuthContextProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = async (email: string, password: string) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    setIsLoggedIn(true);
  };

  const handleLogin = async (email: string, password: string) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    await firebase.auth().signOut();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        register: handleRegister,
        login: handleLogin,
        logout: handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
