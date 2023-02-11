import { extendTheme, theme } from "@chakra-ui/react";

export type ExtendedTheme = Record<string, any>;

// TODO: rename variables below to match a standard naming
interface CostumeColors {
    mainBackgroundColor: string;
    textColor: string;
    // Project
    projectFilesBackgroundColor: string;
    projectFilesTextColor: string;
    projectFilesArrowColor: string;
    projectFilesSelectedBackgroundColor: string;
    // Nav
    navBackgroundColor: string;
    navTextColor: string;
    navSelectedTextColor: string;
    navSelectedBackgroundColor: string;
    // Tabs
    tabsBackgroundColor: string;
    tabBackgroundColor: string;
    tabTextColor: string;
    tabSelectedBackgroundColor: string;
    tabSelectedTextColor: string;
    // File
    importExportTextColor: string;
    importFilePathTextColor: string;
    importFileComponentTextColor: string;
    variableTextColor: string;
    fileTextColor: string;
    bracketsTextColor: string;
    tagBracketsTextColor: string;
    tagTextColor: string;
}

const baseExtension = {
    sizes: {
        screenHeight: "100vh",
        screenWidth: "100vw",
    },
    colors: {
        footerBackgroundColor: theme.colors.blue[500],
    },

    fonts: {
        heading: `'Chakra Petch', sans-serif`,
        body: `'Chakra Petch', sans-serif`,
    },
};

const darkV1Colors: CostumeColors = {
    mainBackgroundColor: "#2C2C32",
    textColor: "#FFFFFF",
    // Project
    projectFilesBackgroundColor: "#333333",
    projectFilesTextColor: "#FFFFFF",
    projectFilesArrowColor: "#676767",
    projectFilesSelectedBackgroundColor: "#676767",
    // Nav themes
    navBackgroundColor: "#3E3E3E",
    navSelectedBackgroundColor: "#2C2C32",
    navTextColor: "#676767",
    navSelectedTextColor: "#FFFFFF",
    // Tabs
    tabsBackgroundColor: "#363636",
    tabBackgroundColor: "#3E3E3E",
    tabSelectedBackgroundColor: "#2C2C32",
    tabTextColor: "#676767",
    tabSelectedTextColor: "#FFFFFF",
    // File
    importExportTextColor: "#A26FA7",
    importFilePathTextColor: "#D0A340",
    importFileComponentTextColor: "#85ded9",
    fileTextColor: "#E5D685",
    variableTextColor: "#5F76A8",
    bracketsTextColor: "#ffe540",
    tagBracketsTextColor: "#676767",
    tagTextColor: "#5F76A8",
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
