import { Text } from "@chakra-ui/react";
import { Tag } from "~/components/CodeElements/Tag";
import { ReactFile } from "../../CodeElements/ReactFile";

const SkillsFile = () => {
    return (
        <ReactFile name="Skills">
            <Tag>
                <Tag addSpacingToChildren name="p">
                    <Text
                        fontSize="2xl"
                        color="editor.foreground"
                        maxWidth="600px"
                        lineHeight={"8"}
                    >
                        Skills
                    </Text>
                </Tag>
            </Tag>
        </ReactFile>
    );
};

export { SkillsFile };
