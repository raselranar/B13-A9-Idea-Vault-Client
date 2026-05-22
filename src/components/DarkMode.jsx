"use client";
import { useTheme } from "next-themes";
import { Switch } from "@heroui/react";
import { Moon, Sun } from "lucide-react";

const DarkMode = () => {
  const { theme, setTheme } = useTheme("light");
  return (
    <>
      <Switch defaultSelected size="lg">
        {({ isSelected }) => (
          <>
            <Switch.Control
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="bg-white/20 backdrop-blur-md group-data-[selected=true]:bg-white/30 border dark:border-slate-700/60 border-white/10">
              <Switch.Thumb className="bg-white shadow-md">
                <Switch.Icon>
                  {isSelected ? (
                    <Moon className={` text-zinc-900 w-4 h-4`} />
                  ) : (
                    <Sun className={` text-zinc-900 w-4 h-4`} />
                  )}
                </Switch.Icon>
              </Switch.Thumb>
            </Switch.Control>
          </>
        )}
      </Switch>
    </>
  );
};
export default DarkMode;
