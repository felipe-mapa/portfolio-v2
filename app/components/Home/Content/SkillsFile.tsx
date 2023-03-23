import { Box, Flex, Text } from "@chakra-ui/react";
import { NavigationButtons } from "../NavigationButtons";
import { START_MARGIN } from "~/components/CodeElements/Tag";
import { ScreenContainer } from "~/components/CodeElements/ScreenContainer";

const skills = [
    "React",
    "Typescript",
    "PHP",
    "ReactNative",
    "MySQL",
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "Git",
    "Docker",
];

const SkillsFile = () => {
    return (
        <ScreenContainer>
            <Flex
                position="relative"
                py={3}
                px={5}
                direction="column"
                height="100%"
            >
                <Text color="editor.foreground" style={{ wordSpacing: "5px" }}>
                    <Box as="span" color="file.keyword">
                        export{" "}
                    </Box>
                    <Box as="span" color="file.declaration">
                        const{" "}
                    </Box>
                    <Box as="span" color="file.variable">
                        {"skillSet"}
                    </Box>
                    :
                    <Box as="span" color="file.component">
                        {" Skill"}
                    </Box>
                    <Box as="span" color="file.declaration">
                        {"[] "}
                    </Box>
                    =
                    <Box as="span" color="file.bracket.color1">
                        {" ["}
                    </Box>
                </Text>
                {skills.map((skill) => (
                    <Text key={skill} color="white" ps={START_MARGIN}>
                        <Box as="span" color="file.string">
                            "{skill}"
                        </Box>
                        ,
                    </Text>
                ))}
                <Text
                    color="editor.foreground"
                    style={{ wordSpacing: "5px" }}
                    mb={5}
                >
                    <Box as="span" color="file.bracket.color1">
                        {"]"}
                    </Box>
                    ;
                </Text>
                <NavigationButtons />
            </Flex>
        </ScreenContainer>
    );
};

export { SkillsFile };
