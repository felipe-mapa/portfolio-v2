import { Stack } from "@chakra-ui/react";

import { Tab } from "./Tab";
import { getFilesFromProjectTree } from "~/models/constants";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";

const Tabs = () => {
    const { openedTabs } = useTabSystemContext();

    const projectFiles = getFilesFromProjectTree();

    return (
        <Stack
            direction="row"
            spacing="2px"
            backgroundColor="tabsBackgroundColor"
            width="100%"
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
        </Stack>
    );
};

export { Tabs };
