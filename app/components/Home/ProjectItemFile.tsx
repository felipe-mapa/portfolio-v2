import { Box, Text } from "@chakra-ui/react";
import { faBasketballBall, faEraser } from "@fortawesome/free-solid-svg-icons";
import type { ProjectItemFile as ProjectItemFileType } from "~/models/types";

interface ProjectItemFileProps {
    item: ProjectItemFileType;
    branchLevel?: number;
}

const ProjectItemFile = (props: ProjectItemFileProps) => {
    const {
        item: { title, fileType },
        branchLevel = 0,
    } = props;

    // TODO add proper icons
    const icon = (() => {
        if (fileType === "ts") {
            return faBasketballBall;
        }

        return faEraser;
    })();

    return (
        <Box ms={`${branchLevel * 15}px`} p="0.5">
            <Text>{`${title}.${fileType}`}</Text>
        </Box>
    );
};

export { ProjectItemFile };
