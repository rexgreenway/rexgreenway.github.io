import { useState, type ReactNode } from "react";

import { AuthContext } from "./AuthContext";
import { Token, TOKEN_EXPIRY, TOKEN_KEY } from "./types";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Get Stored token if exists
  const storedToken = sessionStorage.getItem(TOKEN_KEY);
  const storedExpiry = sessionStorage.getItem(TOKEN_EXPIRY);

  if (storedToken && !storedExpiry) {
    console.error("No Expiry stored for token, setting to unauthenticated");
  }

  const sessionToken: Token =
    storedToken && storedExpiry
      ? { token: storedToken, expires: new Date(storedExpiry) }
      : { token: null };

  // Store token in Auth context
  const [token, setToken] = useState<Token>(sessionToken);

  const storeToken = (token: string) => {
    const now = new Date();
    now.setHours(now.getHours() + 1);

    sessionStorage.setItem(TOKEN_KEY, token);
    sessionStorage.setItem(TOKEN_EXPIRY, now.toISOString());

    setToken({ token, expires: now });
  };

  // If the token expires or wrong password entered?
  const clearToken = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_EXPIRY);
    setToken({ token: null });
  };

  return (
    <AuthContext.Provider value={{ token, storeToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
