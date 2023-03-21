import { Flex } from "@chakra-ui/react";
import {
    faClipboardList,
    faFileCode,
    faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "./NavItem";

const ActivityBar = () => {
    return (
        <Flex
            width="20"
            backgroundColor="activityBar.background"
            direction="column"
            zIndex={2}
        >
            <NavItem pathname="/" title="Home" icon={faFileCode} />
            {/* TODO: Find a nicer skills icon */}
            <NavItem pathname="/skills" title="Skills" icon={faMicrochip} />
            {/* TODO: Find a nicer projects icon */}
            <NavItem
                pathname="/projects"
                title="Projects"
                icon={faClipboardList}
            />
        </Flex>
    );
};

export { ActivityBar };
