import { Album, Image } from "@mui/icons-material";

// API URL

const API_URL = "http://127.0.0.1:8000";
// const API_URL = "https://rex-api-505972842640.europe-west2.run.app";

// RESPONSE TYPES

export interface Image {
  path: string;
  url: string;
}

export interface Album {
  name: string;
  path: string;
  images: Image[];
}

// REQUESTS

/**
 * Fetches an album.
 *
 * @param {string} album_name
 *
 * @returns {Album} The desired album.
 */
export async function getAlbum(album_name: string): Promise<Album> {
  const encoded_name = encodeURI(album_name);
  const url = `${API_URL}/photography/${encoded_name}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `failed to fetch album '${album_name}' | status: ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("unknown error: ", error);
    }
    throw error;
  }
}

/**
 * Fetches a photo from a given album.
 *
 * @param {string} album_name
 * @param {string} image_name
 *
 * @returns {Image} The desired photo.
 */
export async function getPhoto(
  album_name: string,
  image_name: string
): Promise<Image> {
  const encoded_path = encodeURI(`${album_name}/${image_name}`);
  const url = `${API_URL}/photography/${encoded_path}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `failed to fetch photo '${album_name}/${image_name}' | status: ${response.status}`
      );
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
