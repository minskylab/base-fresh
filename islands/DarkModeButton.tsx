import IconMoon from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/moon.tsx";
import IconSun from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/sun.tsx";
import { useState } from "preact/hooks";

export default function DarkModeButton() {
  const [isDark, setIsDark] = useState(false);

  const handleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <button
      class="p-2 shadow-lg bg-white dark:bg-indigo-500 rounded hover:bg-indigo-200 dark:hover:bg-indigo-600 focus:outline-none"
      onClick={handleDarkMode}
    >
      {isDark ? <IconMoon class="w-5 h-5" /> : <IconSun class="w-5 h-5" />}
    </button>
  );
}
