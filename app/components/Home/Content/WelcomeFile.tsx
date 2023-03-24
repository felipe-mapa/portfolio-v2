import { Heading, Text } from "@chakra-ui/react";
import { Tag } from "~/components/CodeElements/Tag";
import { useWebsiteBreakpoints } from "~/hooks/useWebsiteBreakpoints";
import { ReactFile } from "../../CodeElements/ReactFile";

const WelcomeFile = () => {
    const { isMobile } = useWebsiteBreakpoints();

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
                    <Text
                        fontSize={isMobile ? "2xl" : "4xl"}
                        color="editor.foreground"
                    >
                        Full Stack Software Engineer
                    </Text>
                </Tag>
            </Tag>
        </ReactFile>
    );
};

export { WelcomeFile };
