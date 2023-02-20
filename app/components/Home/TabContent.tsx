import { Text } from "@chakra-ui/react";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";
import { WelcomeFile } from "./Content/WelcomeFile";

const TabContent = () => {
    const { activeTab, openedTabs } = useTabSystemContext();

    switch (activeTab) {
        case "welcomeFile":
            return <WelcomeFile />;
        case "aboutFile":
            return <Text color="white">about</Text>;
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

export { TabContent };
