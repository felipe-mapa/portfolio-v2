import React, { useState, useEffect, useContext } from "react";
import themes from "~/theme/themes";

import type { ExtendedTheme, ThemeName } from "~/theme/themes";

import type { WithChildrenProp } from "~/models/types";

interface ThemeContextValue {
    theme: ThemeState;
    updateTheme: (themeName: ThemeName) => void;
}

interface ThemeState {
    value: ExtendedTheme;
    name: ThemeName;
}

const defaultTheme: ThemeContextValue = {
    theme: {
        value: themes.darkV1,
        name: "darkV1",
    },
    updateTheme: () => {},
};

const ThemeContext = React.createContext<ThemeContextValue>(defaultTheme);

const ThemeProvider = ({ children }: WithChildrenProp) => {
    const [theme, setTheme] = useState<ThemeState | null>(null);

    const updateTheme = (themeName: ThemeName) => {
        setTheme({
            name: themeName,
            value: themes[themeName],
        });
    };

    useEffect(() => {
        const localStorage = window.localStorage;

        if (!localStorage) return;

        const savedTheme = localStorage.getItem(
            "globalTheme"
        ) as ThemeName | null;

        if (savedTheme === null) return;

        setTheme({
            name: savedTheme,
            value: themes[savedTheme],
        });
    }, []);

    useEffect(() => {
        if (!theme) {
            return;
        }
        const localStorage = window.localStorage;

        if (!localStorage) return;

        localStorage?.setItem("globalTheme", theme.name);
    }, [theme]);

    if (!theme) {
        // TODO: add a loading message and spinner
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, useThemeContext };
