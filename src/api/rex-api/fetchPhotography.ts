import data from "../../assets/albums.json";

// CONSTANTS
// const API_URL = "http://127.0.0.1:8000";
const API_URL = "https://rex-api-505972842640.europe-west2.run.app";

const THUMBNAIL_BUCKET = "rex-thumbnails";

// ASSETS
export const ALBUMS: { [key: string]: Album } = data;

interface PhotoInfo {
  // alt text for the photo
  alt?: string;
}

interface Album {
  name: string;
  thumbnail: string;
  film_stock?: string;
  photos: { [name: string]: PhotoInfo };
}

// RESPONSE TYPES

export interface Image {
  url: string;
  name?: string;
  size?: string;
}

export enum Size {
  THUMBNAIL = "thumbnail",
  LARGE = "large",
}

// UTILITY FUNCS
export const getThumbnailURL = (image_name: string): string => {
  return `https://storage.googleapis.com/${THUMBNAIL_BUCKET}/${image_name}`;
};

// REQUESTS

/**
 * Wake's up the API.
 */
export async function wakeUp() {
  try {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
      throw new Error(`api did not wake up!`);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/**
 * Fetches a photo from a given album.
 *
 * @param {string} image_name
 * @param {Size} [size=Size.LARGE] Optional
 *
 * @returns {Image} The desired photo.
 */
export async function getPhoto(
  image_name: string,
  size: Size = Size.LARGE
): Promise<Image> {
  const encoded_path = encodeURI(`${image_name}?size=${size}`);
  const url = `${API_URL}/photography/${encoded_path}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `failed to fetch photo '${image_name}' | status: ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
