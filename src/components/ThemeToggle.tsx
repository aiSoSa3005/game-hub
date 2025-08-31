import useDarkMode from "../hooks/useDarkMode";
import { Switch } from "@/components/ui/switch";

export default function ThemeToggle() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <Switch
      checked={isDarkMode ? true : false}
      onClick={toggleDarkMode}
      className=""
    />
  );
}
