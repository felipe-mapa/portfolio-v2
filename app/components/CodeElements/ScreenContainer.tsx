import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { Box, Text } from "@chakra-ui/react";

import type { MouseEvent } from "react";
import type { WithChildrenProp } from "~/models/types";

// "Hi, welcome to my website!!! "
const binaryText =
    "01001000 01101001 00101100 00100000 01110111 01100101 01101100 01100011 01101111 01101101 01100101 00100000 01110100 01101111 00100000 01101101 01111001 00100000 01110111 01100101 01100010 01110011 01101001 01110100 01100101 00100001 00100001 00100001 00100000";

const ScreenContainer = ({ children }: WithChildrenProp) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [maskPosition, setMaskPosition] = useState("");
    const [containerSize, setContainerSize] = useState({ height: 0, width: 0 });

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        setMaskPosition(
            `${e.clientX - containerSize.width / 2 - 325}px ${
                e.clientY - containerSize.height / 2 - 50
            }px`
        );
    };

    const updateContainerSize = useCallback(() => {
        if (!containerRef.current) {
            return;
        }

        const { clientHeight, clientWidth } = containerRef.current;
        setContainerSize({
            height: clientHeight,
            width: clientWidth,
        });
    }, [maskPosition]);

    useLayoutEffect(() => {
        updateContainerSize();
    }, [updateContainerSize]);

    useEffect(() => {
        window.addEventListener("resize", updateContainerSize);
    }, [updateContainerSize]);

    return (
        <Box
            ref={containerRef}
            position="relative"
            height="100%"
            onMouseMove={onMouseMove}
        >
            <Box position="absolute" top={0} left={0} width="100%">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    style={{
                        // @ts-ignore
                        "-webkit-mask-position": maskPosition,
                        "-webkit-mask-size": `${containerSize.width}px ${containerSize.height}px`,
                        "-webkit-mask-image":
                            "radial-gradient(circle, rgba(0, 0, 0, 0.5) 10px, rgba(0, 0, 0, 1) 150px)",
                    }}
                    backgroundColor="editor.background"
                />
                <Text color="green" textAlign="justify">
                    {Array(100)
                        .fill(null)
                        .map(() => {
                            return binaryText;
                        })}
                </Text>
            </Box>
            {children}
        </Box>
    );
};

export { ScreenContainer };
