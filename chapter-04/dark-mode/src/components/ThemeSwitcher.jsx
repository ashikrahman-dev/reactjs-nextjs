import { useEffect } from "react";
import { useState } from "react";

import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || null);

    // useEffect(() => {
    //     if (window.matchMedia("prefer-color-scheme: dark").matches) {
    //         setTheme("dark");
    //     } else {
    //         setTheme("light");
    //     }
    // }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <div className=" dark:text-white">Lorem ipsum.</div>
            <button
                onClick={handleThemeSwitch}
                className="bg-sky-500 hover:bg-sky-600 hover:text-white font-medium transition-all delay-50 rounded-full px-7 py-2 flex gap-2 buttonWrap"
            >
                Dark
                {theme === "dark" ? <LightIcon /> : <DarkIcon />}
            </button>
        </>
    );
}
