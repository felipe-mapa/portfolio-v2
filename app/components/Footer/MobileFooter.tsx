import { Flex } from "@chakra-ui/react";
import { menuItems } from "~/models/constants";
import { MobileNavItem } from "../ActivityBar/MobileNavItem";
import { FOOTER_MOBILE_HEIGHT } from "./Footer";

const MobileFooter = () => {
    return (
        <Flex
            position="fixed"
            width="100%"
            height={FOOTER_MOBILE_HEIGHT}
            alignItems="center"
            bottom={0}
            backgroundColor="activityBar.background"
        >
            {menuItems.map((item) => (
                <MobileNavItem key={item.pathname} {...item} />
            ))}
        </Flex>
    );
};

export { MobileFooter };
