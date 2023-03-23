import { Box, Flex, Image } from "@chakra-ui/react";
import {
    faClipboardList,
    faFileCode,
    // faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "./NavItem";

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
                <NavItem pathname="/" title="Home" icon={faFileCode} />
                {/* <NavItem pathname="/skills" title="Skills" icon={faKeyboard} /> */}
                <NavItem
                    pathname="/projects"
                    title="Projects"
                    icon={faClipboardList}
                />
            </Box>
            <Flex direction="column" alignItems="center" pb={2}>
                <Box
                    as="a"
                    p={3}
                    target="_blank"
                    href="https://www.linkedin.com/in/felipe-pavanela"
                >
                    <Image src={LinkedInLogo} width="10" height="10" />
                </Box>
                <Box
                    as="a"
                    p={3}
                    target="_blank"
                    href="https://github.com/felipe-mapa"
                >
                    <Image src={GithubLogo} width="10" height="10" />
                </Box>
            </Flex>
        </Flex>
    );
};

export { ActivityBar };
