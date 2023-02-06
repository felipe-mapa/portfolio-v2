import { extendTheme, theme } from "@chakra-ui/react";

export type ExtendedTheme = Record<string, any>;

interface CostumeColors {
    mainBackgroundColor: string;
    // Project
    projectFilesBackgroundColor: string;
    projectFilesTextColor: string;
    projectFilesArrowColor: string;
    // Nav
    navBackgroundColor: string;
    navTextColor: string;
    navSelectedTextColor: string;
    navSelectedBackgroundColor: string;
}

const baseExtension = {
    sizes: {
        screenHeight: "100vh",
        screenWidth: "100vw",
    },
    colors: {
        footerBackgroundColor: theme.colors.blue[500],
    },
};

const darkV1Colors: CostumeColors = {
    mainBackgroundColor: "#2C2C32",
    // Project
    projectFilesBackgroundColor: "#333333",
    projectFilesTextColor: "#FFFFFF",
    projectFilesArrowColor: "#676767",
    // Nav themes
    navBackgroundColor: "#3E3E3E",
    navSelectedBackgroundColor: "#2C2C32",
    navTextColor: "#676767",
    navSelectedTextColor: "#FFFFFF",
};

const darkV1: ExtendedTheme = extendTheme({
    ...baseExtension,
    colors: {
        ...baseExtension.colors,
        ...darkV1Colors,
    },
});

const lightV1Colors: CostumeColors = {
    mainBackgroundColor: theme.colors.gray[100],
    navBackgroundColor: theme.colors.gray[500],
    projectFilesBackgroundColor: theme.colors.gray[800],
    projectFilesTextColor: "#FFFFFF",
    projectFilesArrowColor: "#676767",
    navTextColor: "#676767",
    navSelectedBackgroundColor: "#3E3E3E",
    navSelectedTextColor: "#FFFFFF",
};

const lightV1: ExtendedTheme = extendTheme({
    ...baseExtension,
    colors: {
        ...baseExtension.colors,
        ...lightV1Colors,
    },
});

const themes = { darkV1, lightV1 };

export type ThemeName = keyof typeof themes;

export default themes;
