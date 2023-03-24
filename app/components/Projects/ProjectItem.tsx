import { Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from "@remix-run/react";

import type { Project } from "~/data/projects";

interface ProjectItemProps {
    project: Project;
    projectSelected: string;
    onClick?: () => void;
}

const ProjectItem = ({
    project,
    projectSelected,
    onClick,
}: ProjectItemProps) => {
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
        <NavLink to={`/projects/${projectId}`} onClick={onClick}>
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
                        letterSpacing={"wider"}
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

export { ProjectItem };
