import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import { Footer } from "./components/Footer/Footer";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ThemeProvider, useThemeContext } from "./contexts/ThemeProvider";

import type { MetaFunction } from "@remix-run/node";
import type { WithChildrenProp } from "./models/types";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Felipe Pavanela | Portfolio",
    viewport: "width=device-width,initial-scale=1",
});

export const links = () => {
    return [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap",
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
            <body style={{ overflow: "hidden" }}>
                <ThemeProvider>{children}</ThemeProvider>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
};

const WithTheme = ({ children }: WithChildrenProp) => {
    const { theme } = useThemeContext();

    return <ChakraProvider theme={theme.value}>{children}</ChakraProvider>;
};

const App = () => (
    <Document>
        <WithTheme>
            <Box h="screenHeight" backgroundColor="editor.background">
                <Flex height="calc(100vh - 24px)">
                    <Sidebar />
                    <Outlet />
                </Flex>
                <Footer />
            </Box>
        </WithTheme>
    </Document>
);

export default App;
