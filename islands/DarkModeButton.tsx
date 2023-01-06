import IconMoon from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/moon.tsx";
import IconSun from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/sun.tsx";
import { useState } from "preact/hooks";

export default function DarkModeButton() {
  const [theme, setTheme] = useState("light");

  return (
    <button
      class="px-3 py-2 shadow-lg bg-white rounded hover:bg-gray-50 focus:outline-none"
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      {theme === "light" ? (
        <IconSun class="w-5 h-5" />
      ) : (
        <IconMoon class="w-5 h-5" />
      )}
    </button>
  );
}
