import { Flex, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { type IconDefinition } from "@fortawesome/free-regular-svg-icons";

interface NavItemProps {
    title: string;
    icon: IconDefinition;
    pathname: string;
}

const NavItem = (props: NavItemProps) => {
    const location = useLocation();

    const isSelected = (() => {
        if (props.pathname === "/") {
            return location.pathname === props.pathname;
        }

        return location.pathname.includes(props.pathname);
    })();

    return (
        <NavLink to={props.pathname}>
            <Flex
                width="100%"
                alignItems="center"
                direction="column"
                p={3}
                backgroundColor={
                    isSelected ? "activityBar.activeBackground" : "transparent"
                }
                borderLeftColor={
                    isSelected ? "activityBar.activeBorder" : "transparent"
                }
                borderLeftWidth={2}
                color={
                    isSelected
                        ? "activityBar.foreground"
                        : "activityBar.inactiveForeground"
                }
            >
                <FontAwesomeIcon icon={props.icon} size="2x" />
                <Text>{props.title}</Text>
            </Flex>
        </NavLink>
    );
};

export { NavItem };
