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
                    isSelected ? "navSelectedBackgroundColor" : "transparent"
                }
                borderLeft={isSelected ? "navSelectedTextColor" : "transparent"}
                borderLeftWidth={2}
                color={isSelected ? "navSelectedTextColor" : "navTextColor"}
            >
                <FontAwesomeIcon icon={props.icon} size="2x" />
                <Text>{props.title}</Text>
            </Flex>
        </NavLink>
    );
};

export default NavItem;
