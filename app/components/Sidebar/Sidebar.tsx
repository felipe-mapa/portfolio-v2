import { Flex } from "@chakra-ui/react";
import {
    faClipboardList,
    faFileCode,
    faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";

const Sidebar = () => {
    return (
        <Flex
            width="20"
            backgroundColor="navBackgroundColor"
            direction="column"
        >
            <NavItem pathname="/" title="Home" icon={faFileCode} />
            <NavItem pathname="/skills" title="Skills" icon={faMicrochip} />
            <NavItem
                pathname="/projects"
                title="Projects"
                icon={faClipboardList}
            />
        </Flex>
    );
};

export { Sidebar };
