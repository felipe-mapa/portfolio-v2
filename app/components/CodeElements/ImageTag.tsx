import { Box, Flex, Text } from "@chakra-ui/react";

import { getTagStartMargin } from "./Tag";
import { ImageWithSkeleton } from "../ImageWithSkeleton";
import { useWebsiteBreakpoints } from "~/hooks/useWebsiteBreakpoints";

interface TagProps {
    imageSource: string;
}

const ImageTag = (props: TagProps) => {
    const { imageSource } = props;
    const { isMobile } = useWebsiteBreakpoints();

    const imageSize = isMobile ? 32 : 40;

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
            <ImageWithSkeleton
                src={imageSource}
                width={imageSize}
                height={imageSize}
                borderRadius="full"
            />
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
