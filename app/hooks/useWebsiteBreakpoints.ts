import { useWindowSize } from "usehooks-ts";

export const viewportBreakpoints = {
    web: 1000,
    tabletLarge: 800,
    tablet: 600,
};

const useWebsiteBreakpoints = () => {
    const { width } = useWindowSize();

    const isMobile = width < viewportBreakpoints.tablet;
    const isWeb = width >= viewportBreakpoints.web;

    return { isMobile, isWeb };
};

export { useWebsiteBreakpoints };
