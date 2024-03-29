import { Analytics } from "@vercel/analytics/react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import {
    Footer,
    FOOTER_HEIGHT,
    FOOTER_MOBILE_HEIGHT,
} from "./components/Footer/Footer";

import { ActivityBar } from "./components/ActivityBar/ActivityBar";
import { ThemeProvider, useThemeContext } from "./contexts/ThemeProvider";

import rootStyle from "./root.css";
import { ThemeMenu } from "./components/Root/ThemeMenu";
import { useWebsiteBreakpoints } from "./hooks/useWebsiteBreakpoints";
import nameAnimationStyle from "./components/NameAnimation/nameAnimation.css";

import type { MetaFunction } from "@remix-run/node";
import type { WithChildrenProp } from "./models/types";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Felipe Pavanela | Portfolio",
    description: "Full Stack Software Engineer",
    viewport: "width=device-width,initial-scale=1",
    "og:title": "Felipe Pavanela | Portfolio",
    "og:image": "https://www.pavanela.com/assets/images/eg-image.png",
    "og:description": "Full Stack Software Engineer",
    "og:url": "https://www.pavanela.com",
    "og:type": "website",
});

export const links = () => {
    return [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap",
        },
        {
            rel: "stylesheet",
            href: rootStyle,
        },
        {
            rel: "stylesheet",
            href: nameAnimationStyle,
        },
    ];
};

const Document = ({ children }: WithChildrenProp) => {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <ThemeProvider>{children}</ThemeProvider>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
};

const WithTheme = ({ children }: WithChildrenProp) => {
    const { theme, isLoadingPrevTheme } = useThemeContext();

    if (isLoadingPrevTheme) return null;

    return <ChakraProvider theme={theme.value}>{children}</ChakraProvider>;
};

const App = () => {
    const { isMobile } = useWebsiteBreakpoints();

    const height = isMobile
        ? `calc(100vh - ${FOOTER_MOBILE_HEIGHT})`
        : `calc(100vh - ${FOOTER_HEIGHT})`;

    return (
        <Document>
            <WithTheme>
                <Box h="screenHeight" backgroundColor="editor.background">
                    <Flex height={height}>
                        {!isMobile && <ActivityBar />}
                        <Outlet />
                        <ThemeMenu />
                    </Flex>
                    <Footer />
                </Box>
            </WithTheme>
            <Analytics />
        </Document>
    );
};

export default App;
