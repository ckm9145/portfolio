"use client";

import React, { useState, useEffect, createContext, useContext } from 'react'

type Theme = "light" | "dark";
const themeContext = createContext<ThemeContextType | null>(null);

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

// Need to have a component separate for theme to be constantly maintained w.r.t active components
export default function ThemeContextProvider({
    children
}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");

    // Need to create a function for toggling light/dark mode + sun/moon icon
    const toggleTheme = () =>{
        if (theme === "light"){
            setTheme("dark");
            window.localStorage.setItem("theme", "dark"); // can verify using inspect element
            document.documentElement.classList.add("dark");
        }
        else{
            setTheme("light")
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");

        }
    };

    // useEffect is used to synchronize with an external system (i.e. local browser) 
    // runs after rendering so return statement happens first (so re-rendering occurs when useEffect runs)
    useEffect( () => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null; // retrieve value saved in local browser
        if (localTheme){
            setTheme(localTheme);
            if (localTheme === "dark"){
                // To get tailwind to check if the dark mode is actually dark
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme:dark)").matches){
            // considering if the actual PC has a personalized light scheme -- Not sure if this is needed for Mac?
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    
    }, []);

  return (
    <themeContext.Provider value={{
        theme,
        toggleTheme
    }}>
        {children}
    </themeContext.Provider>
  )
}

export function useTheme() {
    const context = useContext(themeContext);
    if (context === null){
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;

}