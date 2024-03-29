import { Box, Button, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { getProjectById } from "~/data/projects";
import { Tag } from "~/components/CodeElements/Tag";
import { ReactFile } from "../../CodeElements/ReactFile";

import { NavLink } from "@remix-run/react";
import { ImageWithSkeleton } from "~/components/ImageWithSkeleton";

interface ProjectImageProps {
    projectId: string;
    thumbnailImage: string;
}

const ProjectImage = ({ projectId, thumbnailImage }: ProjectImageProps) => {
    return (
        <NavLink to={`/projects/${projectId}`}>
            <Box
                m={2}
                transition="all"
                _hover={{
                    translate: "1px -1px",
                }}
            >
                <ImageWithSkeleton
                    height={200}
                    width={200}
                    src={thumbnailImage}
                    borderRadius="lg"
                />
            </Box>
        </NavLink>
    );
};

const projectIds = ["dartboard-scorer", "commute-visualiser", "flag-finder"];

const ProjectsFile = () => {
    return (
        <ReactFile name="Projects">
            <Tag name="Flex" tagProps={[{ key: "direction", value: "column" }]}>
                <Tag
                    addSpacingToChildren
                    name="Flex"
                    tagProps={[
                        { key: "direction", value: "row" },
                        { key: "flexWrap", value: "wrap" },
                    ]}
                >
                    <Flex my={1} direction="row" flexWrap="wrap">
                        {projectIds.map((projectId) => {
                            const project = getProjectById(projectId);

                            if (!project) {
                                return null;
                            }

                            return (
                                <ProjectImage
                                    key={project.id}
                                    projectId={project.id}
                                    thumbnailImage={project.thumbnailImage}
                                />
                            );
                        })}
                    </Flex>
                </Tag>
                <Tag addSpacingToChildren name="Button">
                    <NavLink to="/projects">
                        <Button
                            colorScheme="blue"
                            m={2}
                            size="sm"
                            rightIcon={
                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                />
                            }
                        >
                            VIEW ALL
                        </Button>
                    </NavLink>
                </Tag>
            </Tag>
        </ReactFile>
    );
};

export { ProjectsFile };
