import { API_URL, Image, Size, THUMBNAIL_BUCKET, TokenResponse } from "./model";

const rexApi = {
  // UTILITY FUNCS
  getThumbnailURL: (image_name: string): string => {
    return `https://storage.googleapis.com/${THUMBNAIL_BUCKET}/${image_name}`;
  },

  // REQUESTS

  /**
   * Wake's up the API.
   */
  wakeUp: async (): Promise<void> => {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
      console.error(`Rex API did not wake up... ${response.status}`);
    }
  },

  // - AUTH

  /**
   * Authenticates and fetches Bearer Token.
   *
   * @param {FormData} authForm
   *
   * @returns {TokenResponse} Token Response.
   */
  getToken: async (authForm: FormData): Promise<TokenResponse> => {
    const response = await fetch(`${API_URL}/token`, {
      method: "POST",
      body: authForm,
    });

    if (!response.ok) {
      throw new Error(`Fetching Token failed | status: ${response.status}`);
    }

    return await response.json();
  },

  // - PHOTOGRAPHY

  /**
   * Fetches a photo from a given album.
   *
   * @param {string} image_name
   * @param {Size} [size=Size.LARGE] Optional
   *
   * @returns {Image} The desired photo.
   */
  getPhoto: async (
    token: string,
    image_name: string,
    size: Size = Size.MEDIUM,
  ): Promise<Image> => {
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
  },

  /**
   * Downloads a photo.
   *
   * @param {string} image_name
   * @param {Size} [size=Size.MEDIUM] Optional
   *
   * @returns {Image} The desired photo.
   */
  downloadPhoto: async (
    token: string,
    image_name: string,
    size: Size = Size.MEDIUM,
  ): Promise<void> => {
    const encoded_path = encodeURI(`${image_name}/download?size=${size}`);
    const url = `${API_URL}/photography/${encoded_path}`;

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status == 401) {
      throw new Error(`Fetching Photo failed | unauthenticated`);
    } else if (!response.ok) {
      throw new Error(
        `failed to download photo '${image_name}' | status: ${response.status}`,
      );
    }

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = image_name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  },
};

export default rexApi;
