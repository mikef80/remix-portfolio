import { Theme, useTheme } from "~/utils/theme-provider";

const DarkModeToggle = () => {
  const [, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return <button onClick={toggleTheme}>Toggle</button>;
};

export default DarkModeToggle;
