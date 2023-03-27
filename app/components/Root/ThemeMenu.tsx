import {
    Button,
    Menu,
    MenuButton,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
} from "@chakra-ui/react";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useThemeContext } from "~/contexts/ThemeProvider";
import { useWebsiteBreakpoints } from "~/hooks/useWebsiteBreakpoints";
import { FOOTER_HEIGHT, FOOTER_MOBILE_HEIGHT } from "../Footer/Footer";

const ThemeMenu = () => {
    const { theme, updateTheme } = useThemeContext();
    const { isMobile } = useWebsiteBreakpoints();

    const footerHeight = isMobile ? FOOTER_MOBILE_HEIGHT : FOOTER_HEIGHT;
    const menuBottom = `calc(${footerHeight} + 20px)`;

    return (
        <Menu closeOnSelect>
            <MenuButton
                as={Button}
                position="fixed"
                height="14"
                width="14"
                right="20px"
                bottom={menuBottom}
                borderRadius="full"
                backgroundColor="pink.500"
                _hover={{
                    backgroundColor: "pink.600",
                }}
                _active={{
                    backgroundColor: "pink.600",
                }}
            >
                <FontAwesomeIcon color="white" icon={faSwatchbook} size="lg" />
            </MenuButton>
            <MenuList minWidth="240px">
                <MenuOptionGroup
                    defaultValue={theme.name}
                    title="Theme"
                    type="radio"
                >
                    <MenuItemOption
                        value="darkV1"
                        onClick={() => updateTheme("darkV1")}
                    >
                        Dark V1
                    </MenuItemOption>
                    <MenuItemOption
                        value="lightV1"
                        onClick={() => updateTheme("lightV1")}
                    >
                        Light V1
                    </MenuItemOption>
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    );
};

export { ThemeMenu };
