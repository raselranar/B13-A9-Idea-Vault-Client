"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@heroui/react";
import { Moon, Sun } from "lucide-react";

const DarkMode = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isLight = resolvedTheme === "light";

  return (
    <>
      <Switch size="lg">
        {() => (
          <>
            <Switch.Control
              onClick={() => setTheme(isLight ? "dark" : "light")}
              className="bg-white/20 backdrop-blur-md group-data-[selected=true]:bg-white/30 border dark:border-slate-700/60 border-white/10">
              <Switch.Thumb className="bg-white dark:bg-slate-700 shadow-md">
                <Switch.Icon>
                  {isLight ? (
                    <Sun className={` text-zinc-900 w-4 h-4`} />
                  ) : (
                    <Moon className={` text-zinc-100 w-4 h-4`} />
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
