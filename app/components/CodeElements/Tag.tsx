import { Box, Text } from "@chakra-ui/react";
import type { ReactHTML } from "react";
import type { WithChildrenProp } from "~/models/types";

interface TagProps extends WithChildrenProp {
    name?: keyof ReactHTML;
    addSpacingToChildren?: boolean;
}

const START_MARGIN = 10;

const Tag = (props: TagProps) => {
    const { name = "", children, addSpacingToChildren = false } = props;

    return (
        <Box ms={START_MARGIN}>
            <Text color="tagBracketsTextColor">
                {"<"}
                <Box as="span" color="tagTextColor">
                    {name}
                </Box>
                {">"}
            </Text>
            <Box ms={addSpacingToChildren ? START_MARGIN : 0}>{children}</Box>
            <Text color="tagBracketsTextColor">
                {"</"}
                <Box as="span" color="tagTextColor">
                    {name}
                </Box>
                {">"}
            </Text>
        </Box>
    );
};

export { Tag };
