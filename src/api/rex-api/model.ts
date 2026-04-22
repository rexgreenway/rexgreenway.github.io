// CONSTANTS
export const API_URL = "http://127.0.0.1:8080";
// const API_URL = "https://rex-api-505972842640.europe-west2.run.app";

export const THUMBNAIL_BUCKET = "rex-thumbnails";

interface PhotoInfo {
  alt?: string; // alt text for the photo
}

export interface Album {
  name: string;
  thumbnail: string;
  film_stock: string;
  photos: { [name: string]: PhotoInfo };
}

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
