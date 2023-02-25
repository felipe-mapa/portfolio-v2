import { Flex } from "@chakra-ui/react";

import { Tab } from "./Tab";
import { getFilesFromProjectTree } from "~/models/constants";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";
import { AnimatePresence, Reorder } from "framer-motion";

const Tabs = () => {
    const { openedTabs, setOpenedTabs } = useTabSystemContext();

    const projectFiles = getFilesFromProjectTree();

    return (
        <Flex
            backgroundColor="editorGroupHeader.tabsBackground"
            zIndex={2}
            overflow="hidden"
        >
            <Reorder.Group
                as="ul"
                axis="x"
                values={openedTabs}
                onReorder={setOpenedTabs}
                style={{
                    display: "flex",
                    listStyleType: "none",
                }}
            >
                <AnimatePresence initial={false}>
                    {openedTabs.map((tab) => {
                        const projectFile = projectFiles.find(
                            (file) => file.id === tab
                        );

                        if (!projectFile) {
                            return null;
                        }

                        return (
                            <Tab
                                key={projectFile.id}
                                projectFile={projectFile}
                            />
                        );
                    })}
                </AnimatePresence>
            </Reorder.Group>
        </Flex>
    );
};

export { Tabs };
