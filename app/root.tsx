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
import NavBar from "./components/NavBar/NavBar";
import { ThemeProvider, useThemeContext } from "./contexts/ThemeProvider";

import type { ReactNode } from "react";
import type { MetaFunction } from "@remix-run/node";
import type { WithChildrenProp } from "./models/types";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Felipe Pavanela | Portfolio",
    viewport: "width=device-width,initial-scale=1",
});

export const links = () => {
    return [];
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
    const { theme } = useThemeContext();

    return <ChakraProvider theme={theme.value}>{children}</ChakraProvider>;
};

const App = () => (
    <Document>
        <WithTheme>
            <Box h="screenHeight" backgroundColor="mainBackgroundColor">
                <Flex height="calc(100vh - 24px)">
                    <NavBar />
                    <Outlet />
                </Flex>
                <Footer />
            </Box>
        </WithTheme>
    </Document>
);

export default App;
