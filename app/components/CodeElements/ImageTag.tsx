import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { START_MARGIN } from "./Tag";

interface TagProps {
    imageSource: string;
}

const ImageTag = (props: TagProps) => {
    const { imageSource } = props;

    return (
        <Flex ms={START_MARGIN} alignItems="center">
            <Text color="file.tagPunctuation">
                {"<"}
                <Box as="span" color="file.tagName">
                    img
                </Box>{" "}
                <Box as="span" color="file.attribute">
                    src
                </Box>
                <Box as="span" color="editor.foreground">
                    =
                </Box>
                <Box as="span" color="file.string">
                    "
                </Box>
            </Text>
            <Image src={imageSource} width="40" height="40" rounded="full" />
            <Text color="file.tagPunctuation">
                <Box as="span" color="file.string">
                    "
                </Box>
                {" />"}
            </Text>
        </Flex>
    );
};

export { ImageTag };
