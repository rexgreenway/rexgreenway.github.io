import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { AuthProvider, useAuth } from "@contexts";

import { PasswordModal } from "@components/modals";

const AuthGuard = () => {
  const { token, clearToken } = useAuth();

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (import.meta.env.VITE_LOCAL === "true") {
      setAuthenticated(true);
      return;
    }

    if (token.token && token.token && token.expires > new Date()) {
      setAuthenticated(true);
      return;
    }

    setAuthenticated(false);
    if (token.token) {
      clearToken();
    }
    return;
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
