import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@contexts";

import { rexApi } from "@api";

import styles from "./Auth.module.css";

export const PasswordForm = ({
  onAuthenticated,
}: {
  onAuthenticated: () => void;
}) => {
  const { storeToken } = useAuth();

  const navigate = useNavigate();

  const [wrongPwEntered, setWrongPwEntered] = useState<boolean>(false);

  const enterPassword = (authForm: FormData) => {
    authForm.set("username", "rexgreenway");
    rexApi
      .getToken(authForm)
      .then((resp) => {
        storeToken(resp.access_token);
        onAuthenticated();
      })
      .catch((error) => {
        console.error("Authentication Error: ", error);
        setWrongPwEntered(true);
      });
  };

  return (
    <div className={styles.Wrapper}>
      <form
        className={styles.PasswordForm}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          enterPassword(formData);
        }}
      >
        <h2>Enter Password:</h2>
        <div>
          <input type="password" name="password" />
        </div>
        {wrongPwEntered && <h3 style={{ color: "red" }}>WRONG PASSWORD</h3>}
      </form>
      <div className={styles.Back} onClick={() => navigate("..")}>
        <p>{"<-"} Back to Home</p>
      </div>
    </div>
  );
};
