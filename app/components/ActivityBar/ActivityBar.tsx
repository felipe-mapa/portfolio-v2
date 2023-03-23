import { Box, Flex, Image } from "@chakra-ui/react";
import { NavItem } from "./NavItem";

import { menuItems, profileLinks } from "~/models/constants";
import GithubLogo from "~/assets/images/logos/github.png";
import LinkedInLogo from "~/assets/images/logos/linkedin.png";

const ActivityBar = () => {
    return (
        <Flex
            width="20"
            backgroundColor="activityBar.background"
            direction="column"
            justifyContent="space-between"
            zIndex={2}
        >
            <Box>
                {menuItems.map((item) => (
                    <NavItem key={item.pathname} {...item} />
                ))}
            </Box>
            <Flex direction="column" alignItems="center" pb={2}>
                <Box as="a" p={3} target="_blank" href={profileLinks.linkedIn}>
                    <Image src={LinkedInLogo} width="10" height="10" />
                </Box>
                <Box as="a" p={3} target="_blank" href={profileLinks.gitHub}>
                    <Image src={GithubLogo} width="10" height="10" />
                </Box>
            </Flex>
        </Flex>
    );
};

export { ActivityBar };
