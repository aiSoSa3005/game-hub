import useDarkMode from "../hooks/useDarkMode";
import { Switch } from "@/components/ui/switch";

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return <Switch onClick={toggleDarkMode} className="" />;
}
