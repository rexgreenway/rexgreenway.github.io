export const TOKEN_KEY = "access_token";
export const TOKEN_EXPIRY = "token_expires";

export type Token =
  | {
      token: string;
      expires: Date;
    }
  | {
      token: null;
    };

export type AuthContextType = {
  token: Token;
  storeToken: (token: string) => void;
  clearToken: () => void;
};
