import { Box, Text } from "@chakra-ui/react";
import { useWebsiteBreakpoints } from "~/hooks/useWebsiteBreakpoints";

import type { ReactHTML } from "react";
import type { WithChildrenProp } from "~/models/types";

interface TagPropsBase extends WithChildrenProp {
    addSpacingToChildren?: boolean;
    tagProps?: {
        key: string;
        value: string;
    }[];
}

interface HtmlTagProps extends TagPropsBase {
    name?: keyof ReactHTML;
}

interface ReactTagProps extends TagPropsBase {
    name?: Capitalize<string>;
}

type TagProps = HtmlTagProps | ReactTagProps;

export const getTagStartMargin = (isMobile: boolean) => {
    if (isMobile) {
        return 5;
    }

    return 10;
};

const isReactTag = (tag: string) => {
    return /^\p{Lu}/u.test(tag);
};

const Tag = (props: TagProps) => {
    const {
        name = "",
        children,
        addSpacingToChildren = false,
        tagProps,
    } = props;
    const { isMobile } = useWebsiteBreakpoints();

    const startMargin = getTagStartMargin(isMobile);

    const nameColor = isReactTag(name) ? "file.component" : "file.tagName";

    return (
        <Box ms={startMargin}>
            <Text color="file.tagPunctuation">
                {"<"}
                <Box as="span" color={nameColor}>
                    {name}
                </Box>
                {tagProps?.map(({ key, value }) => (
                    <Box as="span" color="file.tagPunctuation" key={key}>
                        {" "}
                        <Box as="span" color="file.attribute">
                            {key}
                        </Box>
                        {"="}
                        <Box as="span" color="file.string">
                            "{value}"
                        </Box>
                    </Box>
                ))}

                {">"}
            </Text>
            <Box ms={addSpacingToChildren ? startMargin : 0}>{children}</Box>
            <Text color="file.tagPunctuation">
                {"</"}
                <Box as="span" color={nameColor}>
                    {name}
                </Box>
                {">"}
            </Text>
        </Box>
    );
};

export { Tag };
