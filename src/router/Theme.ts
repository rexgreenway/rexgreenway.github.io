export enum Theme {
  Dark = "dark",
  Light = "light",
}

export const setDark = () => {
  document.documentElement.setAttribute("data-theme", Theme.Dark);
};

export const setLight = () => {
  document.documentElement.setAttribute("data-theme", Theme.Light);
};

export const ThemeMap: Record<Theme, () => void> = {
  [Theme.Dark]: setDark,
  [Theme.Light]: setLight,
};
