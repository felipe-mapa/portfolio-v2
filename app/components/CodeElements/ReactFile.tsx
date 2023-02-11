import { Box, Flex, Text } from "@chakra-ui/react";
import type { WithChildrenProp } from "~/models/types";

interface ReactFileProps extends WithChildrenProp {
    name: string;
}

const ReactFile = ({ name, children }: ReactFileProps) => {
    return (
        <Flex pt={3} ps={5} direction="column" height="100%">
            <Text
                color="importExportTextColor"
                mb="40"
                style={{ wordSpacing: "5px" }}
            >
                import{" "}
                <Box as="span" color="importFileComponentTextColor">
                    React
                </Box>{" "}
                from{" "}
                <Box as="span" color="importFilePathTextColor">
                    'react'
                </Box>
                <Box as="span" color="textColor">
                    ;
                </Box>
            </Text>
            <>
                <Text color="textColor" style={{ wordSpacing: "5px" }}>
                    <Box as="span" color="importExportTextColor">
                        export{" "}
                    </Box>
                    <Box as="span" color="variableTextColor">
                        const{" "}
                    </Box>
                    <Box as="span" color="fileTextColor">
                        {name}{" "}
                    </Box>
                    =
                    <Box as="span" color="bracketsTextColor">
                        {" () "}
                    </Box>
                    {" => "}
                    <Box as="span" color="bracketsTextColor">
                        {"("}
                    </Box>
                </Text>
                {children}
                <Text color="textColor" style={{ wordSpacing: "5px" }}>
                    <Box as="span" color="bracketsTextColor">
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
