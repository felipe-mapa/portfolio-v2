import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { useThemeContext } from "~/contexts/ThemeProvider";

const NavBar = () => {
    const { updateTheme } = useThemeContext();
    return (
        <Flex>
            <Box width="100px" backgroundColor="navBackgroundColor">
                <Stack spacing={4} direction="column" align="center">
                    <Button
                        onClick={() => updateTheme("darkV1")}
                        colorScheme="teal"
                        size="lg"
                    >
                        DARK
                    </Button>
                    <Button
                        onClick={() => updateTheme("lightV1")}
                        colorScheme="red"
                        size="lg"
                    >
                        LIGHT
                    </Button>
                </Stack>
            </Box>
        </Flex>
    );
};

export default NavBar;
