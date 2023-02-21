import { Flex } from "@chakra-ui/react";

import { Tab } from "./Tab";
import { getFilesFromProjectTree } from "~/models/constants";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";

const Tabs = () => {
    const { openedTabs } = useTabSystemContext();

    const projectFiles = getFilesFromProjectTree();

    return (
        <Flex
            direction="row"
            backgroundColor="editorGroupHeader.tabsBackground"
            width="100%"
            flexWrap="wrap"
            zIndex={2}
        >
            {openedTabs.map((tab) => {
                const projectFile = projectFiles.find(
                    (file) => file.id === tab
                );

                if (!projectFile) {
                    return null;
                }

                return <Tab key={projectFile.id} projectFile={projectFile} />;
            })}
        </Flex>
    );
};

export { Tabs };
