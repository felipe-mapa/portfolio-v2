import { Button, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { profileLinks } from "~/models/constants";
import { Tag } from "~/components/CodeElements/Tag";
import { ReactFile } from "../../CodeElements/ReactFile";

const UseContactFile = () => {
    return (
        <ReactFile name="useContact">
            <Tag>
                <Tag addSpacingToChildren name="h2">
                    <Heading
                        py={3}
                        as="h1"
                        size="2xl"
                        color="editor.foreground"
                    >
                        Say hi on LinkedIn &#128075;
                    </Heading>
                </Tag>
                <Tag addSpacingToChildren name="p">
                    <Button
                        as="a"
                        target="_blank"
                        colorScheme="blue"
                        my={2}
                        href={profileLinks.linkedIn}
                        rightIcon={
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        }
                    >
                        Profile
                    </Button>
                </Tag>
            </Tag>
        </ReactFile>
    );
};

export { UseContactFile };
