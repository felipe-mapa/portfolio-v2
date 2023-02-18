import { Box, Flex, Text } from "@chakra-ui/react";
import type { WithChildrenProp } from "~/models/types";

interface ReactFileProps extends WithChildrenProp {
    name: string;
}

const ReactFile = ({ name, children }: ReactFileProps) => {
    return (
        <Flex pt={3} ps={5} direction="column" height="100%">
            <Text color="file.keyword" mb="40" style={{ wordSpacing: "5px" }}>
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
            <>
                <Text color="editor.foreground" style={{ wordSpacing: "5px" }}>
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
                <Text color="editor.foreground" style={{ wordSpacing: "5px" }}>
                    <Box as="span" color="file.bracket.color1">
                        {")"}
                    </Box>
                    ;
                </Text>
            </>

            <></>
        </Flex>
    );
};

export { ReactFile };
