import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
} from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { WithChildrenProp } from "~/models/types";

interface DrawerMenuProps extends WithChildrenProp {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const DrawerMenu = (props: DrawerMenuProps) => {
    const { isOpen, children, onClose, onOpen } = props;

    return (
        <>
            <Flex
                zIndex={2}
                justifyContent="flex-end"
                backgroundColor="sideBar.background"
                p={5}
            >
                <Box as="button" onClick={onOpen}>
                    <FontAwesomeIcon icon={faBars} size="2x" color="white" />
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

                    <DrawerBody px={0}>{children}</DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export { DrawerMenu };
