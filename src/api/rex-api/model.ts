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

export interface Image {
  url: string;
  name?: string;
  size?: string;
}

export enum Size {
  THUMBNAIL = "thumbnail",
  LARGE = "large",
}
