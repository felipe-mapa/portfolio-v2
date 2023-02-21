import { extendTheme, theme } from "@chakra-ui/react";

export type ExtendedTheme = Record<string, any>;

// Inspired by VS code naming
// Ref: https://code.visualstudio.com/api/references/theme-color
interface CostumeColors {
    editor: {
        background: string;
        foreground: string; // punctuation: Eg , . ; :
    };
    sideBar: {
        background: string;
        foreground: string;
        iconForeground: string;
        activeItemBackground: string;
    };
    activityBar: {
        background: string;
        activeBorder: string;
        activeBackground: string;
        inactiveForeground: string;
        foreground: string;
    };
    // Tabs
    editorGroupHeader: {
        tabsBackground: string;
    };
    tab: {
        activeBackground: string;
        inactiveBackground: string;
        activeForeground: string;
        inactiveForeground: string;
    };
    file: {
        comment: string;
        keyword: string; // export, import, return
        function: string; // ReactComponent
        tagName: string; // h1 h2 p a
        tagPunctuation: string; // <>
        variable: string;
        imported: string;
        string: string;
        component: string; // <ReactComponent />
        declaration: string; // const let interface extends
        // type: string; // ComponentProps // not needed yet
        // number: string; // Not needed yet
        // attribute: string // style={} // not need yet
        bracket: {
            color1: string;
            color2: string;
            color3: string;
        };
    };
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
    // Nav themes
    activityBar: {
        background: "#3E3E3E",
        activeBorder: "#FFFFFF",
        activeBackground: "#1E1E1E",
        inactiveForeground: "#676767",
        foreground: "#FFFFFF",
    },
    // Editor
    editor: {
        background: "#1E1E1E",
        foreground: "#FFFFFF",
    },
    sideBar: {
        background: "#333333",
        iconForeground: "#676767",
        foreground: "#FFFFFF",
        activeItemBackground: "#676767",
    },
    editorGroupHeader: {
        tabsBackground: "#363636",
    },
    tab: {
        activeBackground: "#1E1E1E",
        inactiveBackground: "#3E3E3E",
        activeForeground: "#FFFFFF",
        inactiveForeground: "#676767",
    },
    file: {
        comment: "#6A9955",
        keyword: "#C586C0",
        function: "#DCDCAA",
        tagName: "#569CD6",
        tagPunctuation: "#808080",
        variable: "#4FC1FF",
        imported: "#9CDCFE",
        string: "#CE9178",
        declaration: "#569CD6",
        component: "#4EC9B0",
        bracket: {
            color1: "#FFE128",
            color2: "#C586C0",
            color3: "#569CD6",
        },
    },
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
