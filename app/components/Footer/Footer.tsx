import {
    Box,
    Button,
    Flex,
    Stack,
    Text,
    theme,
    Tooltip,
} from "@chakra-ui/react";
import { faBug, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeContext } from "~/contexts/ThemeProvider";

const Footer = () => {
    const { updateTheme } = useThemeContext();
    return (
        <footer>
            <Flex
                justify="space-between"
                width="100%"
                height="24px"
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
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <Text ps={2}>main</Text>
                    </Flex>
                    <Button
                        onClick={() => updateTheme("darkV1")}
                        colorScheme="teal"
                        size="xs"
                    >
                        DARK
                    </Button>
                    <Button
                        onClick={() => updateTheme("lightV1")}
                        colorScheme="red"
                        size="xs"
                    >
                        LIGHT
                    </Button>
                </Stack>
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
        </footer>
    );
};

export { Footer };
