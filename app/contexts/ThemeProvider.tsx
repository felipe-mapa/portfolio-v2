import { useTimeout } from "usehooks-ts";
import { Box, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useContext } from "react";

import themes from "~/theme/themes";
import { NameAnimation } from "~/components/NameAnimation/NameAnimation";
import { useWebsiteBreakpoints } from "~/hooks/useWebsiteBreakpoints";

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

const defaultState: ThemeState = {
    value: themes.darkV1,
    name: "darkV1",
};

const defaultTheme: ThemeContextValue = {
    theme: defaultState,
    updateTheme: () => {},
};

const BackgroundBase = ({ children }: WithChildrenProp) => (
    <Flex
        backgroundColor="#1E1E1E"
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
    >
        {children}
    </Flex>
);

const ThemeContext = React.createContext<ThemeContextValue>(defaultTheme);

const ThemeProvider = ({ children }: WithChildrenProp) => {
    const [theme, setTheme] = useState<ThemeState>(defaultState);
    const [isAnimationFinished, setIsAnimationFinished] = useState(false);
    const { isWeb } = useWebsiteBreakpoints();

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
        const localStorage = window.localStorage;

        if (!localStorage) return;

        localStorage?.setItem("globalTheme", theme.name);
    }, [theme]);

    useTimeout(() => setIsAnimationFinished(true), 2400);

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
            <AnimatePresence>
                {!isAnimationFinished && (
                    <Box position="absolute" top={0} zIndex={2000}>
                        <motion.div
                            key={"spinner"}
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeIn" }}
                        >
                            <BackgroundBase>
                                <NameAnimation width={isWeb ? "60%" : "80%"} />
                            </BackgroundBase>
                        </motion.div>
                    </Box>
                )}
            </AnimatePresence>
        </ThemeContext.Provider>
    );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, useThemeContext };
