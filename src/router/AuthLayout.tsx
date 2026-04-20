import { Outlet } from "react-router-dom";

import { AuthProvider, useAuth } from "@contexts";

import { PasswordModal } from "../components/Auth";
import { useEffect, useState } from "react";

const AuthGuard = () => {
  const { token, clearToken } = useAuth();
  const [authenticated, setAuthenticated] = useState(token.token !== null);

  useEffect(() => {
    if (!token.token || (token.token && token.expires < new Date())) {
      setAuthenticated(false);
      if (token.token) {
        clearToken();
      }
    }
  }, [token]);

  return (
    <>
      <Outlet />
      {!authenticated && (
        <PasswordModal onAuthenticated={() => setAuthenticated(true)} />
      )}
    </>
  );
};

const AuthLayout = () => (
  <AuthProvider>
    <AuthGuard />
  </AuthProvider>
);

export default AuthLayout;
