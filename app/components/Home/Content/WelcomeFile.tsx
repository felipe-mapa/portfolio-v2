import { Heading, Text } from "@chakra-ui/react";
import { Tag } from "~/components/CodeElements/Tag";
import { ReactFile } from "../../CodeElements/ReactFile";

const WelcomeFile = () => {
    return (
        <ReactFile name="Welcome">
            <Tag>
                <Tag addSpacingToChildren name="h1">
                    <Heading py={3} as="h1" size="4xl" color="textColor">
                        Hey,
                    </Heading>
                    <Heading py={3} as="h1" size="4xl" color="textColor">
                        I'm Felipe
                    </Heading>
                </Tag>
                <Tag addSpacingToChildren name="p">
                    <Text fontSize="4xl" color="textColor">
                        Full Stack Software Engineer
                    </Text>
                </Tag>
            </Tag>
        </ReactFile>
    );
};

export { WelcomeFile };
