import { Box, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";

import { SkillsFile } from "./Content/SkillsFile";
import { AboutFile } from "./Content/AboutFile";
import { WelcomeFile } from "./Content/WelcomeFile";
import { ProjectsFile } from "./Content/ProjectsFile";
import { UseContactFile } from "./Content/UseContactFile";

// Needs to receive `activeTab` as prop to sync animation
const Content = ({ activeTab }: { activeTab: string }) => {
    const { openedTabs } = useTabSystemContext();

    switch (activeTab) {
        case "welcomeFile":
            return <WelcomeFile />;
        case "aboutFile":
            return <AboutFile />;
        case "projectsFile":
            return <ProjectsFile />;
        case "skillsFile":
            return <SkillsFile />;
        case "useContactFile":
            return <UseContactFile />;

        default:
            // TODO
            if (openedTabs.length > 0) {
                return <Text color="white">PAGE NOT FOUND</Text>;
            }
            return <Text color="white">EMPTY PROJECT, OPEN A FILE</Text>;
    }
};

const TabContent = () => {
    const { activeTab } = useTabSystemContext();

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
        </Box>
    );
};

export { TabContent };
