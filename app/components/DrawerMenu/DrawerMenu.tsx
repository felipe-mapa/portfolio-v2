import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    Flex,
    Text,
} from "@chakra-ui/react";
import { NavLink } from "@remix-run/react";
import { useWindowSize } from "usehooks-ts";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SocialLinks } from "./SocialLinks";
import { PortfolioLogo } from "../Icons/PortfolioLogo";
import { ACTIVITY_BAR_WIDTH } from "../ActivityBar/ActivityBar";
import { useWebsiteBreakpoints } from "~/hooks/useWebsiteBreakpoints";

import type { WithChildrenProp } from "~/models/types";

interface DrawerMenuProps extends WithChildrenProp {
    title?: string;
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const year = new Date().getFullYear();

const menuHeight = "52px";

const DrawerMenu = (props: DrawerMenuProps) => {
    const { title, isOpen, children, onClose, onOpen } = props;

    const { width: windowWidth } = useWindowSize();
    const { isMobile } = useWebsiteBreakpoints();

    const width = isMobile
        ? windowWidth
        : `calc(${windowWidth}px - ${ACTIVITY_BAR_WIDTH})`;

    return (
        <>
            <Box height={menuHeight} />
            <Flex
                height={menuHeight}
                zIndex={2}
                position="fixed"
                width={width}
                justifyContent="space-between"
                backgroundColor="sideBar.background"
                px={5}
                py={3}
            >
                <NavLink to="/">
                    <PortfolioLogo size={60} />
                </NavLink>
                <Box as="button" onClick={onOpen}>
                    <Flex alignItems="center" color="sideBar.foreground">
                        {title && <Text mr={2}>{title}</Text>}

                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </Flex>
                </Box>
            </Flex>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerContent
                    backgroundColor="sideBar.background"
                    color="sideBar.foreground"
                    borderLeftWidth={2}
                    borderLeftColor="sideBar.foreground"
                >
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>

                    <DrawerBody px={0}>
                        <Flex
                            justifyContent="space-between"
                            flexDirection="column"
                            height="100%"
                        >
                            {children}
                            <Box>
                                <SocialLinks />
                                <Text textAlign="end" px={2}>
                                    © Felipe Pavanela {year}
                                </Text>
                            </Box>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export { DrawerMenu };
