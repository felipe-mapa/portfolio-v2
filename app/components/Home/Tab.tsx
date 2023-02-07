import { Box, Flex, Text } from "@chakra-ui/react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";
import type { ProjectItemFile } from "~/models/types";
import { getIconByFileType } from "~/utils/helpers";

interface TabProps {
    projectFile: ProjectItemFile;
}

const Tab = ({ projectFile }: TabProps) => {
    const { activeTab, onFileSelect, onTabClose } = useTabSystemContext();
    const isActive = projectFile.id === activeTab;

    return (
        <Flex
            cursor="pointer"
            p={1}
            backgroundColor={
                isActive ? "tabSelectedBackgroundColor" : "tabBackgroundColor"
            }
            alignItems="center"
        >
            <Flex
                onClick={() => onFileSelect(projectFile.id)}
                alignItems="center"
                justifyContent="center"
                direction="row"
                py={2}
            >
                <Box px="2" pt="1">
                    <FontAwesomeIcon
                        icon={getIconByFileType(projectFile.fileType)}
                        color="white"
                    />
                </Box>
                <Text
                    key={projectFile.id}
                    color={isActive ? "tabSelectedTextColor" : "tabTextColor"}
                >
                    {`${projectFile.title}.${projectFile.fileType}`}
                </Text>
            </Flex>
            <Box
                p="2"
                pt="2.5"
                onClick={() => onTabClose(projectFile.id)}
                color={isActive ? "tabSelectedTextColor" : "tabTextColor"}
                opacity={isActive ? 1 : 0}
                _hover={{
                    opacity: 1,
                    color: "tabSelectedTextColor",
                }}
                cursor="pointer"
            >
                <FontAwesomeIcon icon={faClose} size="sm" />
            </Box>
        </Flex>
    );
};

export { Tab };
