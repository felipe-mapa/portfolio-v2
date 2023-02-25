import { Reorder } from "framer-motion";
import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";
import { TypeFileIcon } from "../Icons/TypeFileIcon";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";

import type { ProjectItemFile } from "~/models/types";

interface TabProps {
    projectFile: ProjectItemFile;
}

const Tab = ({ projectFile }: TabProps) => {
    const { activeTab, onFileSelect, onTabClose } = useTabSystemContext();
    const isActive = projectFile.id === activeTab;

    const onCloseTab = () => {
        onTabClose(projectFile.id);
    };

    const onTabClick = () => {
        onFileSelect(projectFile.id);
    };

    return (
        <Reorder.Item
            value={projectFile.id}
            id={projectFile.id}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.15 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
        >
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
                    onPointerDown={onTabClick}
                    onClick={onTabClick}
                    alignItems="center"
                    justifyContent="center"
                    direction="row"
                    py={2}
                >
                    <Box px="2">
                        <TypeFileIcon
                            boxSize={4}
                            fileType={projectFile.fileType}
                        />
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
                    onClick={onCloseTab}
                    size="sm"
                    opacity={isActive ? 1 : 0}
                    color={
                        isActive
                            ? "tab.activeForeground"
                            : "tab.inactiveForeground"
                    }
                    _hover={{
                        opacity: 1,
                        color: "tab.activeForeground",
                        backgroundColor: "tab.inactiveForeground",
                    }}
                />
            </Flex>
        </Reorder.Item>
    );
};

export { Tab };
