interface PhotoInfo {
  alt?: string; // alt text for the photo
}

interface Album {
  name: string;
  thumbnail: string;
  film_stock: string;
  photos: { [name: string]: PhotoInfo };
}

// Find all the film roll JSON files
const rolls = import.meta.glob<{ default: Record<string, Album> }>("./*.json", {
  eager: true,
});

const loadAlbums = (): Record<string, Album> => {
  const merged: Record<string, Album> = {};
  for (const path in rolls) {
    const mod = rolls[path];
    const obj = mod.default;
    Object.assign(merged, obj);
  }
  return merged;
};

const ALBUMS: { [key: string]: Album } = loadAlbums();

export default ALBUMS;
