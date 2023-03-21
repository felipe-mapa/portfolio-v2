import { Box, Flex, Text } from "@chakra-ui/react";
import { useParams } from "@remix-run/react";
import { projects } from "~/data/projects";

const SideBar = () => {
    const { projectId } = useParams();

    return (
        <Box
            p={1}
            backgroundColor="sideBar.background"
            color="sideBar.foreground"
            zIndex={2}
        >
            {projects.map((project) => (
                <Flex as="a" key={project.id} href={`/projects/${project.id}`}>
                    <Text color={projectId === project.id ? "red" : "white"}>
                        {project.name}
                    </Text>
                </Flex>
            ))}
        </Box>
    );
};

export { SideBar };
