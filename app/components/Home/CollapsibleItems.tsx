import { Box, Collapse, Flex, Stack, Text } from "@chakra-ui/react";
import {
    faChevronDown,
    faFolderClosed,
    faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";
import { useToggle } from "~/hooks/useToggle";
import type { ProjectItem } from "~/models/types";
import { ProjectItemFile } from "./ProjectItemFile";

interface CollapsibleItemsProps {
    title: string;
    items: ProjectItem[];
    isFolder?: boolean;
    branchLevel?: number;
}

const getIsFileInsideFolderSelected = (
    items: ProjectItem[],
    activeFileId: string
): boolean => {
    return items.some((items) => {
        if (items.type === "file") {
            return items.id === activeFileId;
        }

        return getIsFileInsideFolderSelected(items.items, activeFileId);
    });
};

const CollapsibleItems = (props: CollapsibleItemsProps) => {
    const { items, title, isFolder = false, branchLevel = 0 } = props;
    const { isToggled, toggle, setIsToggled } = useToggle(true);
    const { activeTab } = useTabSystemContext();

    useEffect(() => {
        if (!isFolder) {
            return;
        }

        const isFileInsideFolderSelected = getIsFileInsideFolderSelected(
            items,
            activeTab
        );

        if (isFileInsideFolderSelected) {
            setIsToggled(true);
        }
    }, [activeTab, isFolder, items, toggle, setIsToggled]);

    return (
        <Box py="0.5">
            <Flex
                ps={`${branchLevel * 15}px`}
                alignItems="center"
                onClick={toggle}
                cursor="pointer"
            >
                <Stack
                    direction="row"
                    color="projectFilesArrowColor"
                    alignItems="center"
                >
                    <Box
                        transform={isToggled ? "" : "rotate(-90deg)"}
                        transition="all 0.2s"
                    >
                        <FontAwesomeIcon icon={faChevronDown} size="sm" />
                    </Box>
                    {isFolder && (
                        <Box width="4">
                            {isToggled ? (
                                <FontAwesomeIcon
                                    icon={faFolderOpen}
                                    size="sm"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faFolderClosed}
                                    size="sm"
                                />
                            )}
                        </Box>
                    )}
                </Stack>

                <Text ms={2}>{title}</Text>
            </Flex>

            <Collapse startingHeight={0} in={isToggled}>
                {items.map((item) => {
                    if (item.type === "file") {
                        return (
                            <ProjectItemFile
                                key={item.id}
                                item={item}
                                branchLevel={branchLevel + 1}
                            />
                        );
                    }
                    if (item.type === "folder") {
                        return (
                            <CollapsibleItems
                                key={item.id}
                                items={item.items}
                                title={item.title}
                                isFolder
                                branchLevel={branchLevel + 1}
                            />
                        );
                    }
                    return null;
                })}
            </Collapse>
        </Box>
    );
};

export { CollapsibleItems };
