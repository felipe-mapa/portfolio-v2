import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { getTagStartMargin } from "./Tag";
import { useWebsiteBreakpoints } from "~/hooks/useWebsiteBreakpoints";

interface TagProps {
    imageSource: string;
}

const ImageTag = (props: TagProps) => {
    const { imageSource } = props;
    const { isMobile } = useWebsiteBreakpoints();

    return (
        <Flex ms={getTagStartMargin(isMobile)} alignItems="center">
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
