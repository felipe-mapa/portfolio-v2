import { Box, Flex, Text } from "@chakra-ui/react";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";
import TypeFileIcon from "../Icons/TypeFileIcon";

import type { ProjectItemFile as ProjectItemFileType } from "~/models/types";

interface ProjectItemFileProps {
    item: ProjectItemFileType;
    branchLevel?: number;
}

const ProjectItemFile = (props: ProjectItemFileProps) => {
    const {
        item: { id, title, fileType },
        branchLevel = 0,
    } = props;

    const { activeTab, onFileSelect } = useTabSystemContext();

    return (
        <Box
            py="0.5"
            backgroundColor={
                activeTab === id
                    ? "projectFilesSelectedBackgroundColor"
                    : "transparent"
            }
            cursor="pointer"
            onClick={() => onFileSelect(id)}
        >
            <Flex
                direction="row"
                ps={`${branchLevel * 25}px`}
                alignItems="center"
            >
                <TypeFileIcon boxSize={4} fileType={fileType} />
                <Text ms="2">{`${title}.${fileType}`}</Text>
            </Flex>
        </Box>
    );
};

export { ProjectItemFile };
