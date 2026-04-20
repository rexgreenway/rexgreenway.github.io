import { API_URL, Image, Size, THUMBNAIL_BUCKET, TokenResponse } from "./model";

// UTILITY FUNCS
export const getThumbnailURL = (image_name: string): string => {
  return `https://storage.googleapis.com/${THUMBNAIL_BUCKET}/${image_name}`;
};

// REQUESTS

/**
 * Wake's up the API.
 */
export async function wakeUp() {
  const response = await fetch(`${API_URL}/`);
  if (!response.ok) {
    console.error(`Rex API did not wake up... ${response.status}`);
  }
}

// - AUTH

/**
 * Authenticates and fetches Bearer Token.
 *
 * @param {FormData} authForm
 *
 * @returns {TokenResponse} Token Response.
 */
export async function getToken(authForm: FormData): Promise<TokenResponse> {
  const response = await fetch(`${API_URL}/token`, {
    method: "POST",
    body: authForm,
  });

  if (!response.ok) {
    throw new Error(`Fetching Token failed | status: ${response.status}`);
  }

  return await response.json();
}

// - PHOTOGRAPHY

/**
 * Fetches a photo from a given album.
 *
 * @param {string} image_name
 * @param {Size} [size=Size.LARGE] Optional
 *
 * @returns {Image} The desired photo.
 */
export async function getPhoto(
  token: string,
  image_name: string,
  size: Size = Size.LARGE,
): Promise<Image> {
  const encoded_path = encodeURI(`${image_name}?size=${size}`);
  const url = `${API_URL}/photography/${encoded_path}`;

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status == 401) {
    throw new Error(`Fetching Photo failed | unauthenticated`);
  } else if (!response.ok) {
    throw new Error(
      `failed to fetch photo '${image_name}' | status: ${response.status}`,
    );
  }

  return await response.json();
}
