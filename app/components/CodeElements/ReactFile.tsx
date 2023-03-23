import { Box, Flex, Text } from "@chakra-ui/react";
import { ScreenContainer } from "./ScreenContainer";
import { NavigationButtons } from "../Home/NavigationButtons";

import type { WithChildrenProp } from "~/models/types";

interface ReactFileProps extends WithChildrenProp {
    name: string;
}

const ReactFile = ({ name, children }: ReactFileProps) => {
    return (
        <ScreenContainer>
            <Flex
                position="relative"
                p={5}
                pt={3}
                direction="column"
                height="100%"
            >
                <Text color="file.keyword" style={{ wordSpacing: "5px" }}>
                    import{" "}
                    <Box as="span" color="file.imported">
                        React
                    </Box>{" "}
                    from{" "}
                    <Box as="span" color="file.string">
                        'react'
                    </Box>
                    <Box as="span" color="editor.foreground">
                        ;
                    </Box>
                </Text>
                <Flex
                    justifyContent="space-around"
                    direction="column"
                    height="100%"
                    marginY={5}
                >
                    <Box>
                        <Text
                            color="editor.foreground"
                            style={{ wordSpacing: "5px" }}
                        >
                            <Box as="span" color="file.keyword">
                                export{" "}
                            </Box>
                            <Box as="span" color="file.declaration">
                                const{" "}
                            </Box>
                            <Box as="span" color="file.function">
                                {name}{" "}
                            </Box>
                            =
                            <Box as="span" color="file.bracket.color1">
                                {" () "}
                            </Box>
                            {" => "}
                            <Box as="span" color="file.bracket.color1">
                                {"("}
                            </Box>
                        </Text>
                        {children}
                        <Text
                            color="editor.foreground"
                            style={{ wordSpacing: "5px" }}
                        >
                            <Box as="span" color="file.bracket.color1">
                                {")"}
                            </Box>
                            ;
                        </Text>
                    </Box>
                    {/* Move component slightly higher */}
                    <Box />
                </Flex>
                <NavigationButtons />
            </Flex>
        </ScreenContainer>
    );
};

export { ReactFile };
