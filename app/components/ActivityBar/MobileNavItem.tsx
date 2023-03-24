import { Flex, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { NavItemProps } from "./NavItem";

const MobileNavItem = (props: NavItemProps) => {
    const location = useLocation();

    const isSelected = (() => {
        if (props.pathname === "/") {
            return location.pathname === props.pathname;
        }

        return location.pathname.includes(props.pathname);
    })();

    return (
        <NavLink to={props.pathname} style={{ width: "100%", height: "100%" }}>
            <Flex
                width="100%"
                height="100%"
                alignItems="center"
                justifyContent="center"
                direction="column"
                backgroundColor={
                    isSelected ? "activityBar.activeBackground" : "transparent"
                }
                borderBottomColor={
                    isSelected ? "activityBar.activeBorder" : "transparent"
                }
                borderBottomWidth={3}
                color={
                    isSelected
                        ? "activityBar.foreground"
                        : "activityBar.inactiveForeground"
                }
            >
                <FontAwesomeIcon icon={props.icon} size="xl" />
                <Text mt={1} fontSize={12} lineHeight={1}>
                    {props.title}
                </Text>
            </Flex>
        </NavLink>
    );
};

export { MobileNavItem };
