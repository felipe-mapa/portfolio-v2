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
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { WithChildrenProp } from "~/models/types";
import { PortfolioLogo } from "../Icons/PortfolioLogo";
import { SocialLinks } from "./SocialLinks";

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

    return (
        <>
            <Box height={menuHeight} />
            <Flex
                height={menuHeight}
                zIndex={2}
                position="fixed"
                width="100%"
                justifyContent="space-between"
                backgroundColor="sideBar.background"
                px={5}
                py={3}
            >
                <NavLink to="/">
                    <PortfolioLogo size={60} />
                </NavLink>
                <Box as="button" onClick={onOpen}>
                    <Flex alignItems="center">
                        {title && (
                            <Text color="white" mr={2}>
                                {title}
                            </Text>
                        )}

                        <FontAwesomeIcon
                            icon={faBars}
                            size="lg"
                            color="white"
                        />
                    </Flex>
                </Box>
            </Flex>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerContent
                    backgroundColor="sideBar.background"
                    color="sideBar.foreground"
                    borderLeftWidth={2}
                    borderLeftColor="activityBar.activeBorder"
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
