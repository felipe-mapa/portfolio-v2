import { Text } from "@chakra-ui/react";
import { Tag } from "~/components/CodeElements/Tag";
import { ReactFile } from "../../CodeElements/ReactFile";
import { ImageTag } from "~/components/CodeElements/ImageTag";

import Profile from "~/assets/images/profile.jpg";

import type { WithChildrenProp } from "~/models/types";

const Paragraph = ({ children }: WithChildrenProp) => (
    <Tag addSpacingToChildren name="p">
        <Text
            fontSize="large"
            color="editor.foreground"
            maxWidth="600px"
            lineHeight={1.4}
        >
            {children}
        </Text>
    </Tag>
);

const AboutFile = () => {
    return (
        <ReactFile name="About">
            <Tag>
                <ImageTag imageSource={Profile} />
                <Paragraph>
                    I'm a Full Stack Software Engineer based in Aotearoa New
                    Zealand. I have a passion for creating socially impactful
                    applications that help make a difference to people's lives
                    and the environment.
                </Paragraph>

                <Paragraph>
                    I'm dedicated to continuous learning and experimentation to
                    build my skills and stay up-to-date with the latest trends
                    and technologies. I enjoy coming up with creative solutions
                    to complex problems - I thrive on a challenge!
                </Paragraph>
                <Paragraph>
                    With expertise in TypeScript, React, and React Native, I
                    design and maintain complex software applications focusing
                    on front end interfaces and following UX/UI design
                    principles.
                </Paragraph>
                <Paragraph>
                    I am also well versed in creating and maintaining back-end
                    software and database, mainly using PHP and MySQL.
                </Paragraph>
            </Tag>
        </ReactFile>
    );
};

export { AboutFile };
