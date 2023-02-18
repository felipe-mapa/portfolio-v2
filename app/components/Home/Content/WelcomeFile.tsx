import { Heading, Text } from "@chakra-ui/react";
import { Tag } from "~/components/CodeElements/Tag";
import { ReactFile } from "../../CodeElements/ReactFile";

const WelcomeFile = () => {
    return (
        <ReactFile name="Welcome">
            <Tag>
                <Tag addSpacingToChildren name="h1">
                    <Heading
                        py={3}
                        as="h1"
                        size="4xl"
                        color="editor.foreground"
                    >
                        Hey,
                    </Heading>
                    <Heading
                        py={3}
                        as="h1"
                        size="4xl"
                        color="editor.foreground"
                    >
                        I'm Felipe
                    </Heading>
                </Tag>
                <Tag addSpacingToChildren name="p">
                    <Text fontSize="4xl" color="editor.foreground">
                        Full Stack Software Engineer
                    </Text>
                </Tag>
            </Tag>
        </ReactFile>
    );
};

export { WelcomeFile };
