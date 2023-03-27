import { Box, Flex } from "@chakra-ui/react";
import { NavItem } from "./NavItem";

import { menuItems } from "~/models/constants";
import { SocialLinks } from "../DrawerMenu/SocialLinks";

export const ACTIVITY_BAR_WIDTH = "5rem";

const ActivityBar = () => {
    return (
        <Flex
            width={ACTIVITY_BAR_WIDTH}
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
