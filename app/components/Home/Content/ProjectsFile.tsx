import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { getProjectById } from "~/data/projects";
import { Tag } from "~/components/CodeElements/Tag";
import { ReactFile } from "../../CodeElements/ReactFile";

import type { WithChildrenProp } from "~/models/types";

const imageProps = {
    height: 200,
    width: 200,
};

interface BoxContainerProps extends WithChildrenProp {
    href: string;
}

const BoxContainer = ({ children, href }: BoxContainerProps) => (
    <Box
        m={2}
        as="a"
        href={href}
        transition="all"
        _hover={{
            translate: "1px -1px",
        }}
    >
        {children}
    </Box>
);

const projectIds = ["dartboard-scorer", "flag-finder", "commute-visualiser"];

const ProjectsFile = () => {
    return (
        <ReactFile name="Projects">
            <Tag name="Flex" tagProps={[{ key: "direction", value: "column" }]}>
                <Tag
                    addSpacingToChildren
                    name="Flex"
                    tagProps={[{ key: "direction", value: "row" }]}
                >
                    <Flex my={1} direction="row" flexWrap="wrap">
                        {projectIds.map((projectId) => {
                            const project = getProjectById(projectId);

                            if (!project) {
                                return null;
                            }

                            return (
                                <BoxContainer
                                    key={project.id}
                                    href={`/projects/${project.id}`}
                                >
                                    <Image
                                        borderRadius="lg"
                                        {...imageProps}
                                        src={project.thumbnailImage}
                                    />
                                </BoxContainer>
                            );
                        })}
                    </Flex>
                </Tag>
                <Tag addSpacingToChildren name="Button">
                    <Button
                        as="a"
                        colorScheme="blue"
                        m={2}
                        size="sm"
                        href="/projects"
                    >
                        VIEW ALL
                        <Box as="span" ml={2}>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </Box>
                    </Button>
                </Tag>
            </Tag>
        </ReactFile>
    );
};

export { ProjectsFile };
