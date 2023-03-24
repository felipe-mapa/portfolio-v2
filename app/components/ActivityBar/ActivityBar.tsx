import { Box, Flex } from "@chakra-ui/react";
import { NavItem } from "./NavItem";

import { menuItems } from "~/models/constants";
import { SocialLinks } from "../DrawerMenu/SocialLinks";

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
            <Flex
                direction="column"
                alignItems="center"
                color="activityBar.foreground"
            >
                <SocialLinks />
            </Flex>
        </Flex>
    );
};

export { ActivityBar };
