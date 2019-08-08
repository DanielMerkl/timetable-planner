import React, { createContext, FC, useEffect, useState } from "react";
import authUtils from "../utils/authUtils";

interface Context {
  isLoggedIn: boolean;
  login: (token: string, userId: number) => void;
  logout: () => void;
}

export const AuthContext = createContext<Context>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
});

export const AuthContextProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = authUtils.getToken();
    const userId = authUtils.getUserId();
    if (token && userId !== -1) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token: string, userId: number) => {
    authUtils.setToken(token);
    authUtils.setUserId(userId);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    authUtils.clearStorage();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: handleLogin,
        logout: handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
