import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DrawerMenu } from "~/components/DrawerMenu/DrawerMenu";
import { CollapsibleItems } from "~/components/Home/CollapsibleItems";
import { TabContent } from "~/components/Home/TabContent";
import { Tabs } from "~/components/Home/Tabs";
import {
    TabSystemProvider,
    useTabSystemContext,
} from "~/contexts/TabSystemProvider";
import { useWebsiteBreakpoints } from "~/hooks/useWebsiteBreakpoints";
import { projectTree } from "~/models/constants";

const CollapsibleItemsContainer = () => (
    <Box
        p={1}
        width="300px"
        backgroundColor="sideBar.background"
        color="sideBar.foreground"
        zIndex={2}
    >
        <CollapsibleItems title={projectTree.title} items={projectTree.items} />
    </Box>
);

const CollapsibleItemsDrawerMenu = () => {
    const { activeTab } = useTabSystemContext();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    useEffect(() => {
        closeDrawer();
    }, [activeTab]);

    return (
        <DrawerMenu
            title="Pages"
            onClose={closeDrawer}
            onOpen={openDrawer}
            isOpen={isDrawerOpen}
        >
            <CollapsibleItemsContainer />
        </DrawerMenu>
    );
};

const Index = () => {
    const { isWeb } = useWebsiteBreakpoints();

    return (
        <Flex width="100%" overflow="hidden">
            <TabSystemProvider>
                {isWeb && <CollapsibleItemsContainer />}
                <Flex width="100%" height="100%" direction="column">
                    {isWeb ? <Tabs /> : <CollapsibleItemsDrawerMenu />}
                    <TabContent />
                </Flex>
            </TabSystemProvider>
        </Flex>
    );
};

export default Index;
