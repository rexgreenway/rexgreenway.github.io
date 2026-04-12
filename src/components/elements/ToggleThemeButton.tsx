import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useTheme } from "@contexts";

import styles from "./ToggleThemeButton.module.css";

export const ToggleThemeButton = ({ icon = true }: { icon?: boolean }) => {
  const { theme, toggleTheme } = useTheme();

  const title =
    theme === "dark" ? "Switch to Light mode" : "Switch to Dark mode";

  if (icon) {
    return (
      <div onClick={toggleTheme} className={styles.Toggle} title={title}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </div>
    );
  }

  return (
    <button onClick={toggleTheme} title={title}>
      BUTTON
    </button>
  );
};
