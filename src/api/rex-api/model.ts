// RESPONSE TYPES

export interface TokenResponse {
  access_token: string;
  token_type: string;
}

export interface Image {
  url: string;
  name?: string;
  size?: string;
}

export enum Size {
  THUMBNAIL = "thumbnail",
  MEDIUM = "medium",
  LARGE = "large",
}
