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
        type: string; // typescript type and interface
        attribute: string; // style={}
        bracket: {
            color1: string;
            color2: string;
            color3: string;
        };
    };
    button: {
        background: string;
        foreground: string;
    };
    maskImageOpacity: string;
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
        inactiveForeground: "#919191",
        foreground: "#FFFFFF",
    },
    // Editor
    editor: {
        background: "#1E1E1E",
        foreground: "#FFFFFF",
    },
    sideBar: {
        background: "#333333",
        iconForeground: "#919191",
        foreground: "#FFFFFF",
        activeItemBackground: "#757575",
    },
    editorGroupHeader: {
        tabsBackground: "#363636",
    },
    tab: {
        activeBackground: "#1E1E1E",
        inactiveBackground: "#3E3E3E",
        activeForeground: "#FFFFFF",
        inactiveForeground: "#919191",
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
        attribute: "#9CDCFE",
        component: "#4EC9B0",
        type: "#4EC9B0",
        bracket: {
            color1: "#f7d607",
            color2: "#C586C0",
            color3: "#569CD6",
        },
    },
    button: {
        background: theme.colors.gray[100],
        foreground: "#000000",
    },
    maskImageOpacity: "0.5",
};

const darkV1: ExtendedTheme = extendTheme({
    ...baseExtension,
    colors: {
        ...baseExtension.colors,
        ...darkV1Colors,
    },
});

const lightV1Colors: CostumeColors = {
    // Nav themes
    activityBar: {
        background: "#3E3E3E",
        activeBorder: "#FFFFFF",
        activeBackground: "#1E1E1E",
        inactiveForeground: "#919191",
        foreground: "#FFFFFF",
    },
    // Editor
    editor: {
        background: "#FFFFFF",
        foreground: "#1E1E1E",
    },
    sideBar: {
        background: "#EEEEEE",
        iconForeground: "#919191",
        foreground: "#000000",
        activeItemBackground: "#CCCCCC",
    },
    editorGroupHeader: {
        tabsBackground: "#EEEEEE",
    },
    tab: {
        activeBackground: "#FFFFFF",
        inactiveBackground: "#CCCCCC",
        activeForeground: "#000000",
        inactiveForeground: "#333333",
    },
    file: {
        comment: "#008000",
        keyword: "#AF00DB",
        function: "#795E26",
        tagName: "#001080",
        tagPunctuation: "#808080",
        variable: "#0070C1",
        imported: "#001080",
        string: "#A31515",
        declaration: "#001080",
        attribute: "#593b3b",
        component: "#7A3E9D",
        type: "#4EC9B0",
        bracket: {
            color1: "#001080",
            color2: "#008000",
            color3: "#AF00DB",
        },
    },
    button: {
        background: "#000000",
        foreground: theme.colors.gray[100],
    },
    maskImageOpacity: "0.2",
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
