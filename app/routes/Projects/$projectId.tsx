import { Flex, Text } from "@chakra-ui/react";
import { useParams } from "@remix-run/react";
import { SideBar } from "~/components/Projects/SideBar";
import { getProjectById } from "~/data/projects";

const ProjectId = () => {
    const { projectId = "" } = useParams();

    const project = getProjectById(projectId);

    if (!project) {
        return null;
    }

    return (
        <Flex width="100%">
            <SideBar />
            <Text color={"white"}>{project.name}</Text>
        </Flex>
    );
};

export default ProjectId;
