import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { NavLink, useParams } from "@remix-run/react";
import { projects } from "~/data/projects";

import type { Project } from "~/data/projects";

interface ProjectItemProps {
    project: Project;
    projectSelected: string;
}

const ProjectItem = ({ project, projectSelected }: ProjectItemProps) => {
    const { type, id: projectId } = project;

    const isSelected = projectSelected === projectId;

    const subtitle = (() => {
        if (type === "mobile") {
            return "Mobile App";
        }
        if (type === "web") {
            return "Website";
        }

        return "";
    })();

    return (
        <NavLink to={`/projects/${projectId}`}>
            <Flex
                p={2}
                backgroundColor={
                    isSelected ? "sideBar.activeItemBackground" : "transparent"
                }
            >
                <Image
                    src={project.iconImage}
                    borderRadius={"lg"}
                    width="14"
                    height="14"
                />
                <Flex direction="column" mx={3} pt={1}>
                    <Text fontWeight="bold">{project.name}</Text>
                    <Text
                        fontWeight="bold"
                        color={
                            isSelected
                                ? "sideBar.background"
                                : "sideBar.activeItemBackground"
                        }
                        fontSize={12}
                    >
                        {subtitle}
                    </Text>
                </Flex>
            </Flex>
        </NavLink>
    );
};

const SideBar = () => {
    const { projectId = "" } = useParams();

    return (
        <Box
            backgroundColor="sideBar.background"
            color="sideBar.foreground"
            zIndex={2}
        >
            {projects.map((project) => (
                <ProjectItem
                    key={project.id}
                    project={project}
                    projectSelected={projectId}
                />
            ))}
        </Box>
    );
};

export { SideBar };
