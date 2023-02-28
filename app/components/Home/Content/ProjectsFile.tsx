import { Box, Button, Flex, Image, Stack } from "@chakra-ui/react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tag } from "~/components/CodeElements/Tag";
import { ReactFile } from "../../CodeElements/ReactFile";

import CommuteThumbnail from "~/assets/images/thumbnails/commutevisualiser_web_thumbnail.png";
import DartsThumbnail from "~/assets/images/thumbnails/darts_app_thumbnail.png";
import FlagFinderThumbnail from "~/assets/images/thumbnails/flagfinder_app_thumbnail.png";

const imageProps = {
    height: 200,
    width: 200,
};

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
                        <Box as="a" href="/projects/darts" m={2}>
                            <Image
                                borderRadius="lg"
                                {...imageProps}
                                src={DartsThumbnail}
                            />
                        </Box>
                        <Box as="a" href="/projects/darts" m={2}>
                            <Image
                                borderRadius="lg"
                                {...imageProps}
                                src={CommuteThumbnail}
                            />
                        </Box>
                        <Box as="a" href="/projects/darts" m={2}>
                            <Image
                                borderRadius="lg"
                                {...imageProps}
                                src={FlagFinderThumbnail}
                            />
                        </Box>
                    </Flex>
                </Tag>
                <Tag addSpacingToChildren name="Button">
                    <Button
                        as="a"
                        colorScheme="blue"
                        my={2}
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
