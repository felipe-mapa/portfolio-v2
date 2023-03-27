import { Box, Flex, Stack, Text, theme, Tooltip } from "@chakra-ui/react";
import { faBug, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MobileFooter } from "./MobileFooter";
import { useWebsiteBreakpoints } from "~/hooks/useWebsiteBreakpoints";

export const FOOTER_HEIGHT = "24px";
export const FOOTER_MOBILE_HEIGHT = "55px";

const year = new Date().getFullYear();

const Footer = () => {
    const { isMobile } = useWebsiteBreakpoints();

    return (
        <footer>
            {isMobile ? (
                <MobileFooter />
            ) : (
                <Flex
                    position="relative"
                    justify="space-between"
                    width="100%"
                    height={FOOTER_HEIGHT}
                    alignItems="center"
                    backgroundColor="footerBackgroundColor"
                >
                    <Stack
                        spacing={4}
                        direction="row"
                        color="white"
                        alignItems="center"
                    >
                        <Flex px={2} alignItems="center">
                            {/* TODO: uncomment once README if finished */}
                            {/* <Flex
                        as="a"
                        px={2}
                        alignItems="center"
                        target="_blank"
                        href="https://github.com/felipe-mapa/portfolio-v2"
                    > */}
                            <FontAwesomeIcon icon={faCodeBranch} />
                            <Text ps={2}>main</Text>
                        </Flex>
                    </Stack>
                    <Text textAlign="end" px={2} color="white" fontSize={14}>
                        © Felipe Pavanela {year}
                    </Text>
                    <Tooltip
                        label="Oh no! You found a bug on my website!"
                        placement="top-start"
                    >
                        <Box pe={3}>
                            <FontAwesomeIcon
                                icon={faBug}
                                color={theme.colors.gray[900]}
                            />
                        </Box>
                    </Tooltip>
                </Flex>
            )}
        </footer>
    );
};

export { Footer };
