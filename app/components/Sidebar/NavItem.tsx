import { Flex, Text } from "@chakra-ui/react";
import { type IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useLocation } from "@remix-run/react";

interface NavItemProps {
    title: string;
    icon: IconDefinition;
    pathname: string;
}

const NavItem = (props: NavItemProps) => {
    const location = useLocation();

    const isSelected = location.pathname === props.pathname;

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
