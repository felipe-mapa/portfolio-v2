import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink, useParams } from "@remix-run/react";
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
                <NavLink key={project.id} to={`/projects/${project.id}`}>
                    <Flex>
                        <Text
                            color={projectId === project.id ? "red" : "white"}
                        >
                            {project.name}
                        </Text>
                    </Flex>
                </NavLink>
            ))}
        </Box>
    );
};

export { SideBar };
