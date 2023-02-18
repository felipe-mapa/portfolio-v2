import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";
import { TypeFileIcon } from "../Icons/TypeFileIcon";

import type { ProjectItemFile } from "~/models/types";

interface TabProps {
    projectFile: ProjectItemFile;
}

const Tab = ({ projectFile }: TabProps) => {
    const { activeTab, onFileSelect, onTabClose } = useTabSystemContext();
    const isActive = projectFile.id === activeTab;

    return (
        <Flex
            p={1}
            backgroundColor={
                isActive ? "tab.activeBackground" : "tab.inactiveBackground"
            }
            mr="2px"
            alignItems="center"
        >
            <Flex
                cursor="pointer"
                onClick={() => onFileSelect(projectFile.id)}
                alignItems="center"
                justifyContent="center"
                direction="row"
                py={2}
            >
                <Box px="2">
                    <TypeFileIcon boxSize={4} fileType={projectFile.fileType} />
                </Box>
                <Text
                    key={projectFile.id}
                    color={
                        isActive
                            ? "tab.activeForeground"
                            : "tab.inactiveForeground"
                    }
                >
                    {`${projectFile.title}.${projectFile.fileType}`}
                </Text>
            </Flex>
            <CloseButton
                p="2"
                pt="2.5"
                ms="2"
                me="1"
                onClick={() => onTabClose(projectFile.id)}
                size="sm"
                opacity={isActive ? 1 : 0}
                color={
                    isActive ? "tab.activeForeground" : "tab.inactiveForeground"
                }
                _hover={{
                    opacity: 1,
                    color: "tab.activeForeground",
                    backgroundColor: "tab.inactiveForeground",
                }}
            />
        </Flex>
    );
};

export { Tab };
