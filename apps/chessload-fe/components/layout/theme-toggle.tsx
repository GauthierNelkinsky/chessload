import { FC } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"

interface IProps {

}
const ThemeToogle: FC<IProps> = ({}) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
      <div onClick={toggleTheme} className="flex gap-1 items-center">
        {theme === "dark" ? 
          <><Sun size={16}/>Light theme</> :
          <><Moon size={16}/>Dark theme</>
        }
      </div>
    );
};

export default ThemeToogle;