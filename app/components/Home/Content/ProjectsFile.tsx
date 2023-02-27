import { Box, Button, Stack } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tag } from "~/components/CodeElements/Tag";
import { ReactFile } from "../../CodeElements/ReactFile";

const ProjectsFile = () => {
    return (
        <ReactFile name="Projects">
            <Tag name="Flex" tagProps={[{ key: "direction", value: "column" }]}>
                <Tag
                    addSpacingToChildren
                    name="Flex"
                    tagProps={[{ key: "direction", value: "row" }]}
                >
                    <Stack spacing={2} my={2} direction="row">
                        <Box width={150} height={150} backgroundColor="white" />
                        <Box width={150} height={150} backgroundColor="white" />
                        <Box width={150} height={150} backgroundColor="white" />
                    </Stack>
                </Tag>
                <Tag addSpacingToChildren name="Button">
                    <Button colorScheme="blue" my={2} size="sm">
                        VIEW ALL
                        <Box as="span" ml={2}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Box>
                    </Button>
                </Tag>
            </Tag>
        </ReactFile>
    );
};

export { ProjectsFile };
