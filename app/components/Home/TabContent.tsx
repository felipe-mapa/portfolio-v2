import { Text } from "@chakra-ui/react";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";

const TabContent = () => {
    const { activeTab, openedTabs } = useTabSystemContext();
    console.log("activeTab", activeTab);

    switch (activeTab) {
        case "welcomeFile":
            return <Text color="white">welcome</Text>;
        case "aboutFile":
            return <Text color="white">about</Text>;
        case "projectsFile":
            return <Text color="white">projects</Text>;
        case "skillsFile":
            return <Text color="white">skills</Text>;
        case "useContactFormFile":
            return <Text color="white">useContactForm</Text>;

        default:
            // TODO
            if (openedTabs.length > 0) {
                return <Text color="white">PAGE NOT FOUND</Text>;
            }
            return <Text color="white">EMPTY PROJECT, OPEN A FILE</Text>;
    }
};

export { TabContent };
