import { Box, Flex, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";
import type { ProjectItemFile as ProjectItemFileType } from "~/models/types";
import { getIconByFileType } from "~/utils/helpers";

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
                <FontAwesomeIcon
                    icon={getIconByFileType(fileType)}
                    color="white"
                    size="sm"
                />
                <Text ms="2">{`${title}.${fileType}`}</Text>
            </Flex>
        </Box>
    );
};

export { ProjectItemFile };
