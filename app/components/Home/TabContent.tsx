import { flatten } from "lodash";
import { Box, Button, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { AboutFile } from "./Content/AboutFile";
import { WelcomeFile } from "./Content/WelcomeFile";

import type { ProjectItem } from "~/models/types";

// Needs to receive `activeTab` as prop to sync animation
const Content = ({ activeTab }: { activeTab: string }) => {
    const { openedTabs } = useTabSystemContext();

    switch (activeTab) {
        case "welcomeFile":
            return <WelcomeFile />;
        case "aboutFile":
            return <AboutFile />;
        case "projectsFile":
            return <Text color="white">projects</Text>;
        case "skillsFile":
            return <Text color="white">skills</Text>;
        case "useContactFile":
            return <Text color="white">useContact</Text>;

        default:
            // TODO
            if (openedTabs.length > 0) {
                return <Text color="white">PAGE NOT FOUND</Text>;
            }
            return <Text color="white">EMPTY PROJECT, OPEN A FILE</Text>;
    }
};

interface TabContentProps {
    items: ProjectItem[];
}

const getAllFilesItd = (
    items: ProjectItem[],
    list: string[] = []
): string[] => {
    const multiLevelArray = items.map((item) => {
        if (item.type === "folder") {
            return getAllFilesItd(item.items, list);
        }

        return item.id;
    });

    return flatten(multiLevelArray);
};

const TabContent = ({ items }: TabContentProps) => {
    const { activeTab, onFileSelect } = useTabSystemContext();

    const nextPageId = (() => {
        const allFilesIds = getAllFilesItd(items);

        const currentTabIndex = allFilesIds.findIndex((id) => id === activeTab);

        if (currentTabIndex < 0) {
            return;
        }

        // can be string or undefined
        return allFilesIds[currentTabIndex + 1];
    })();

    const onOpenNextPage = () => {
        if (!nextPageId) {
            return;
        }

        onFileSelect(nextPageId);
    };

    return (
        <Box overflow="scroll" height="100%" className="hide-scrollbar">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2, ease: "backIn" }}
                >
                    <Content activeTab={activeTab} />
                </motion.div>
            </AnimatePresence>
            {nextPageId && (
                <motion.div
                    animate={{
                        opacity: 1,
                        display: "block",
                    }}
                    initial={{ opacity: 0, display: "none" }}
                    exit={{ opacity: 0, display: "none" }}
                    transition={{ duration: 0.5, delay: 5 }}
                >
                    <Button
                        position="fixed"
                        right={"10"}
                        bottom={"14"}
                        boxShadow="md"
                        onClick={onOpenNextPage}
                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                    >
                        Next Page
                    </Button>
                </motion.div>
            )}
        </Box>
    );
};

export { TabContent };
