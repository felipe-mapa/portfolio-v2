import { Text } from "@chakra-ui/react";
import { Tag } from "~/components/CodeElements/Tag";
import { ReactFile } from "../../CodeElements/ReactFile";
import { ImageTag } from "~/components/CodeElements/ImageTag";

import Profile from "~/assets/images/profile.jpg";
import { useWebsiteBreakpoints } from "~/hooks/useWebsiteBreakpoints";

const AboutFile = () => {
    const { isMobile } = useWebsiteBreakpoints();
    const fontSize = isMobile ? "large" : "2xl";

    return (
        <ReactFile name="About">
            <Tag>
                <ImageTag imageSource={Profile} />
                <Tag addSpacingToChildren name="p">
                    <Text
                        fontSize={fontSize}
                        color="editor.foreground"
                        maxWidth="600px"
                        lineHeight={"8"}
                    >
                        I'm a Full Stack Software Developer with a passion for
                        creating socially impactful applications. With expertise
                        in TypeScript, React, and React Native, I design and
                        maintain complex software applications, using PHP and
                        MySQL.
                    </Text>
                </Tag>
                <Tag addSpacingToChildren name="p">
                    <Text
                        fontSize={fontSize}
                        color="editor.foreground"
                        maxWidth="600px"
                        lineHeight={"8"}
                    >
                        I'm dedicated to continuous learning and experimentation
                        to build my skills and stay up-to-date with the latest
                        trends and technologies.
                    </Text>
                </Tag>
            </Tag>
        </ReactFile>
    );
};

export { AboutFile };
