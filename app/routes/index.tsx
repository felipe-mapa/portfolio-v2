import { Flex, Box } from "@chakra-ui/react";
import { CollapsibleItems } from "~/components/Home/CollapsibleItems";
import { TabContent } from "~/components/Home/TabContent";
import { Tabs } from "~/components/Home/Tabs";
import { TabSystemProvider } from "~/contexts/TabSystemProvider";
import { projectTree } from "~/models/constants";

const Index = () => {
    return (
        <Flex width="100%">
            <TabSystemProvider>
                <Box
                    p={1}
                    width="300px"
                    backgroundColor="sideBar.background"
                    color="sideBar.foreground"
                    zIndex={2}
                >
                    <CollapsibleItems
                        title={projectTree.title}
                        items={projectTree.items}
                    />
                </Box>
                <Flex width="100%" height="100%" direction="column">
                    <Tabs />
                    <TabContent items={projectTree.items} />
                </Flex>
            </TabSystemProvider>
        </Flex>
    );
};

export default Index;
