import { Album } from "./model";

// Find all the film roll JSON files
const rolls = import.meta.glob<{ default: Record<string, Album> }>(
  "../../assets/albums/*.json",
  { eager: true }
);

const loadAlbums = (): Record<string, Album> => {
  const merged: Record<string, Album> = {};
  for (const path in rolls) {
    const mod = rolls[path];
    const obj = mod.default;
    Object.assign(merged, obj);
  }
  return merged;
};

export const ALBUMS: { [key: string]: Album } = loadAlbums();
