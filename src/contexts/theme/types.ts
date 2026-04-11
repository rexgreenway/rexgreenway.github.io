export const DARK_THEME = "dark";
export const LIGHT_THEME = "light";

export type Theme = typeof DARK_THEME | typeof LIGHT_THEME;

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
