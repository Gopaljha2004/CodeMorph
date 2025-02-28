import { useDispatch, useSelector } from "react-redux";
import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "../slice/themeSlice";



const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={`p-2 rounded-full border border-gray-400 bg-gray-200 ${theme === "light" ? "" : "dark:bg-gray-800"}  transition-all duration-300 hover:scale-105`}
    >
      {theme === "light" ? <Moon size={24} /> : <Sun size={24}  />}
    </button>
  );
};

export default ThemeToggle;
