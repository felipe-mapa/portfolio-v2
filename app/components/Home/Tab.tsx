import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";
import type { ProjectItemFile } from "~/models/types";
import TypeFileIcon from "../Icons/TypeFileIcon";

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
                isActive ? "tabSelectedBackgroundColor" : "tabBackgroundColor"
            }
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
                    color={isActive ? "tabSelectedTextColor" : "tabTextColor"}
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
                color={isActive ? "tabSelectedTextColor" : "tabTextColor"}
                _hover={{
                    opacity: 1,
                    color: "tabSelectedTextColor",
                    backgroundColor: "tabTextColor",
                }}
            />
        </Flex>
    );
};

export { Tab };
