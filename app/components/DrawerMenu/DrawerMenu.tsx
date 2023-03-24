import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Text,
} from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { WithChildrenProp } from "~/models/types";
import { SocialLinks } from "./SocialLinks";

interface DrawerMenuProps extends WithChildrenProp {
    title?: string;
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const year = new Date().getFullYear();

const DrawerMenu = (props: DrawerMenuProps) => {
    const { title, isOpen, children, onClose, onOpen } = props;

    return (
        <>
            <Flex
                zIndex={2}
                justifyContent="flex-end"
                backgroundColor="sideBar.background"
                px={5}
                py={3}
            >
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
                <DrawerOverlay />
                <DrawerContent
                    backgroundColor="sideBar.background"
                    color="sideBar.foreground"
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
