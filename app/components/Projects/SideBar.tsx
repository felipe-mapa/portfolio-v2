import { Box } from "@chakra-ui/react";
import { useParams } from "@remix-run/react";

import { projects } from "~/data/projects";
import { ProjectItem } from "./ProjectItem";

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
