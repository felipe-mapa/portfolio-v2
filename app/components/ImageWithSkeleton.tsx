import { Box, Image, Skeleton } from "@chakra-ui/react";
import { useState } from "react";

import type { ComponentWithAs, ImageProps } from "@chakra-ui/react";

const ImageWithSkeleton: ComponentWithAs<"img", ImageProps> = (props) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <Box position="relative">
            <Skeleton
                borderRadius={props.borderRadius}
                rounded={props.rounded}
                isLoaded={isImageLoaded}
                position="absolute"
                height={props.height || "100%"}
                width={props.width || "100%"}
            />
            <Box opacity={isImageLoaded ? 1 : 0} transition="opacity 1s">
                <Image
                    onLoad={() => {
                        setIsImageLoaded(true);
                    }}
                    onError={(err) => console.log(err)}
                    {...props}
                />
            </Box>
        </Box>
    );
};

export { ImageWithSkeleton };
