export enum Theme {
  Dark = "dark",
  Light = "light",
}

const setDark = () => {
  document.documentElement.setAttribute("data-theme", Theme.Dark);
};

const setLight = () => {
  document.documentElement.setAttribute("data-theme", Theme.Light);
};

const setSystemTheme = () => {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    setDark();
  } else {
    setLight();
  }
};

const setTheme = (theme: Theme | undefined) => {
  switch (theme) {
    case Theme.Light:
      setLight();
      break;

    case Theme.Dark:
      setDark();
      break;

    default:
      setSystemTheme();
  }
};

export default setTheme;
