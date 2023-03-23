import { useParams } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { getProjectById } from "~/data/projects";
import { SideBar } from "~/components/Projects/SideBar";

import GithubLogo from "~/assets/images/logos/github.png";

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

    const project = getProjectById(projectId);

    if (!project) {
        return null;
    }

    return (
        <Flex width="100%">
            <SideBar />
            <Flex direction="column" p={5} ps={10} flex={1}>
                <Flex width="100%">
                    <Image
                        src={project.iconImage}
                        borderRadius={"lg"}
                        width="32"
                        height="32"
                    />
                    <Flex direction="column" ps={5}>
                        <Text fontSize={40} color={"white"}>
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
                                    <Image
                                        src={GithubLogo}
                                        width={6}
                                        height={6}
                                    />
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
