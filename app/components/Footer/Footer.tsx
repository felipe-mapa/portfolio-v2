import { Flex } from "@chakra-ui/react";

const Footer = () => {
    return (
        <footer>
            <Flex
                width="100%"
                color="white"
                height="24px"
                alignItems="center"
                backgroundColor="footerBackgroundColor"
            >
                <p>icon</p>
                <p>main</p>
            </Flex>
        </footer>
    );
};

export { Footer };
