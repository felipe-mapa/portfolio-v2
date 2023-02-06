import { Flex, Box } from "@chakra-ui/react";
import { CollapsibleItems } from "~/components/Home/CollapsibleItems";
import { projectTree } from "~/models/constants";

export default function Index() {
    return (
        <Flex>
            <Box
                p={1}
                width="300px"
                backgroundColor="projectFilesBackgroundColor"
                color="projectFilesTextColor"
            >
                <CollapsibleItems
                    title={projectTree.title}
                    items={projectTree.items}
                />
            </Box>
        </Flex>
    );
}
