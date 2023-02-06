import { extendTheme, theme } from "@chakra-ui/react";

export type ExtendedTheme = Record<string, any>;

interface CostumeColors {
    mainBackgroundColor: string;
    navBackgroundColor: string;
    projectFilesBackgroundColor: string;
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
    navBackgroundColor: "#484848",
    projectFilesBackgroundColor: "#333333",
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
