'use client';
import { useTheme } from "next-themes";
import { MoonIcon, Sun } from "lucide-react";
import { Button } from "./ui/button";



export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    return(
        <Button className={`rounded-full`} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <Sun/> : <MoonIcon/>}
        </Button>
    );
}