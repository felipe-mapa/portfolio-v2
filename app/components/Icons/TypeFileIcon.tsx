import { Box, Image } from "@chakra-ui/react";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TsLogo from "~/assets/images/logos/libraries/ts.png";
import ReactLogo from "~/assets/images/logos/libraries/react.png";

import type { FileType } from "~/models/types";
import type { LayoutProps } from "@chakra-ui/react";

interface TypeFileIconProps {
    fileType: FileType;
    boxSize?: LayoutProps["boxSize"];
}

const TypeFileIcon = ({ fileType, boxSize = 5 }: TypeFileIconProps) => {
    switch (fileType) {
        case "tsx":
            return (
                <Box boxSize={boxSize}>
                    <Image src={ReactLogo} alt="react logo" />
                </Box>
            );
        case "ts":
            return (
                <Box boxSize={boxSize}>
                    <Image src={TsLogo} alt="ts logo" />
                </Box>
            );
        default:
            return <FontAwesomeIcon icon={faQuestion} color="white" />;
    }
};

export { TypeFileIcon };
