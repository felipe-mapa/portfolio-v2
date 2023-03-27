import { flatten } from "lodash";
import { Flex, Text } from "@chakra-ui/react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { projectTree } from "~/models/constants";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { useTabSystemContext } from "~/contexts/TabSystemProvider";

import type { ProjectItem } from "~/models/types";

const getAllFilesId = (items: ProjectItem[], list: string[] = []): string[] => {
    const multiLevelArray = items.map((item) => {
        if (item.type === "folder") {
            return getAllFilesId(item.items, list);
        }

        return item.id;
    });

    return flatten(multiLevelArray);
};

const NavigationButtons = () => {
    const { activeTab, onFileSelect } = useTabSystemContext();

    const getPageId = (indexOffset: number) => {
        const allFilesIds = getAllFilesId(projectTree.items);

        const currentTabIndex = allFilesIds.findIndex((id) => id === activeTab);

        if (currentTabIndex < 0) {
            return;
        }

        // can be string or undefined
        return allFilesIds[currentTabIndex + indexOffset];
    };

    const nextPageId = getPageId(1);
    const previousPageId = getPageId(-1);

    const onOpenNextPage = () => {
        if (!nextPageId) {
            return;
        }

        onFileSelect(nextPageId);
    };

    const onOpenPreviousPage = () => {
        if (!previousPageId) {
            return;
        }

        onFileSelect(previousPageId);
    };

    return (
        <Flex direction="column">
            <Text color="file.comment">
                {"// Use the buttons below to navigate through the pages"}
            </Text>
            <Text color="file.comment">
                {
                    "// You can also use the side navigation to choose what page to open"
                }
            </Text>
            <Flex mt={5}>
                {previousPageId && (
                    <PrimaryButton
                        me={5}
                        onClick={onOpenPreviousPage}
                        leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
                    >
                        Previous Page
                    </PrimaryButton>
                )}
                {nextPageId && (
                    <PrimaryButton
                        onClick={onOpenNextPage}
                        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                    >
                        Next Page
                    </PrimaryButton>
                )}
            </Flex>
        </Flex>
    );
};

export { NavigationButtons };
