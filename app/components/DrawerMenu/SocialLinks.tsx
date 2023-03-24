import { Box, Flex } from "@chakra-ui/react";

import { GitHub } from "../Icons/GitHub";
import { LinkedIn } from "../Icons/LinkedIn";
import { profileLinks } from "~/models/constants";

const containerProps = {
    as: "a",
    target: "_blank",
    px: 3,
    py: 2,
} as const;

const defaultIconSize = 40;

interface SocialLinksProps {
    iconSize?: number;
}

const SocialLinks = ({ iconSize = defaultIconSize }: SocialLinksProps) => {
    return (
        <Flex flexDirection={"column"} alignItems="flex-end" mb={4}>
            <Box {...containerProps} href={profileLinks.linkedIn}>
                <LinkedIn size={iconSize} />
            </Box>
            <Box {...containerProps} href={profileLinks.gitHub}>
                <GitHub size={iconSize} />
            </Box>
        </Flex>
    );
};

export { SocialLinks };
