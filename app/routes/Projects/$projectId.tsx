import { useState } from "react";
import { useParams } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { SideBar } from "~/components/Projects/SideBar";
import { getProjectById, projects } from "~/data/projects";
import { DrawerMenu } from "~/components/DrawerMenu/DrawerMenu";
import { ProjectItem } from "~/components/Projects/ProjectItem";
import { useWebsiteBreakpoints } from "~/hooks/useWebsiteBreakpoints";

import { GitHub } from "~/components/Icons/GitHub";

interface ProjectButtonLinkProps {
    url?: string;
    title: string;
}

const ProjectButtonLink = ({ url, title }: ProjectButtonLinkProps) => {
    if (!url) {
        return null;
    }

    return (
        <Button
            boxShadow="md"
            as="a"
            me={5}
            target="_blank"
            href={url}
            rightIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
        >
            {title}
        </Button>
    );
};

const ProjectId = () => {
    const { projectId = "" } = useParams();
    const { isWeb, isMobile } = useWebsiteBreakpoints();

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const project = getProjectById(projectId);

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    if (!project) {
        return null;
    }

    return (
        <Flex width="100%" direction={isWeb ? "row" : "column"}>
            {isWeb ? (
                <SideBar />
            ) : (
                <DrawerMenu
                    title="Projects list"
                    onClose={closeDrawer}
                    onOpen={openDrawer}
                    isOpen={isDrawerOpen}
                >
                    <Flex flexDirection="column">
                        {projects.map((project) => (
                            <ProjectItem
                                key={project.id}
                                onClick={closeDrawer}
                                project={project}
                                projectSelected={projectId}
                            />
                        ))}
                    </Flex>
                </DrawerMenu>
            )}
            <Flex direction="column" p={5} ps={isMobile ? 5 : 10} flex={1}>
                <Flex
                    width="100%"
                    direction={isMobile ? "column" : "row"}
                    alignItems={isMobile ? "center" : "flex-start"}
                >
                    <Image
                        src={project.iconImage}
                        borderRadius={"lg"}
                        width="32"
                        height="32"
                    />
                    <Flex direction="column" ps={isMobile ? 0 : 5} width="100%">
                        <Text
                            py={2}
                            fontSize={40}
                            lineHeight={1.1}
                            color={"white"}
                            textAlign={isMobile ? "center" : "start"}
                        >
                            {project.name}
                        </Text>
                        <Flex mt={2}>
                            {project.githubUrl && (
                                <Button
                                    boxShadow="md"
                                    as="a"
                                    me={5}
                                    target="_blank"
                                    href={project.githubUrl}
                                >
                                    <GitHub size={25} color="#000000" />
                                </Button>
                            )}
                            {project.type === "web" ? (
                                <ProjectButtonLink
                                    title="Website"
                                    url={project.linkUrl}
                                />
                            ) : (
                                project.type === "mobile" && (
                                    <>
                                        <ProjectButtonLink
                                            title="App Store"
                                            url={project.appStoreUrl}
                                        />
                                        <ProjectButtonLink
                                            title="Google Play"
                                            url={project.googlePlayUrl}
                                        />
                                    </>
                                )
                            )}
                        </Flex>
                    </Flex>
                </Flex>
                <Text mt={5} color={"white"}>
                    {project.description}
                </Text>
            </Flex>
        </Flex>
    );
};

export default ProjectId;
