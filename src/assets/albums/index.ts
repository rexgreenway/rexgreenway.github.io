interface PhotoInfo {
  alt?: string; // alt text for the photo
}

interface Album {
  name: string;
  thumbnail: string;
  film_stock: string;
  photos: { [name: string]: PhotoInfo };
}

const loadAlbums = (): Record<string, Album> => {
  // Find & read out all the film roll JSON files
  const rolls = import.meta.glob<{ default: Record<string, Album> }>(
    "./*.json",
    { eager: true },
  );

  // Merge roll json into single object
  const merged: Record<string, Album> = {};
  for (const path in rolls) {
    const mod = rolls[path];
    const obj = mod.default;
    Object.assign(merged, obj);
  }

  // Sort albums so most recent appear first
  const sorted = Object.keys(merged)
    .sort((a, b) => {
      if (a > b) {
        return -1;
      } else {
        return 1;
      }
    })
    .reduce((obj: { [key: string]: Album }, key) => {
      obj[key] = merged[key];
      return obj;
    }, {});

  return sorted;
};

const ALBUMS: { [key: string]: Album } = loadAlbums();

export default ALBUMS;
