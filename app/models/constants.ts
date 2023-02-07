import { flatten } from "lodash";
import type { ProjectTree } from "./types";
import type { ProjectItemFile, ProjectItem } from "~/models/types";

export const projectTree: ProjectTree = {
    title: "felipe_pavanela",
    items: [
        {
            id: "sectionsFolder",
            type: "folder",
            title: "sections",
            items: [
                {
                    id: "welcomeFile",
                    type: "file",
                    title: "welcome",
                    fileType: "tsx",
                },
                {
                    id: "aboutFile",
                    type: "file",
                    title: "about",
                    fileType: "tsx",
                },
                {
                    id: "projectsFile",
                    type: "file",
                    title: "projects",
                    fileType: "tsx",
                },
            ],
        },
        {
            id: "utilsFolder",
            type: "folder",
            title: "utils",
            items: [
                {
                    id: "skillsFile",
                    type: "file",
                    title: "skills",
                    fileType: "ts",
                },
            ],
        },
        {
            id: "hooksFolder",
            type: "folder",
            title: "hooks",
            items: [
                {
                    id: "useContactFormFile",
                    type: "file",
                    title: "useContactForm",
                    fileType: "ts",
                },
            ],
        },
    ],
};

const getFilesTypeFromItem = (
    list: ProjectItemFile[],
    projectItem: ProjectItem
): ProjectItemFile[] => {
    if (projectItem.type === "file") {
        return [...list, projectItem];
    }

    return [...list, ...getFilesTypesFromList(projectItem.items)];
};

const getFilesTypesFromList = (
    projectItems: ProjectItem[]
): ProjectItemFile[] => {
    return flatten(projectItems.map((item) => getFilesTypeFromItem([], item)));
};

export const getFilesFromProjectTree = (): ProjectItemFile[] => {
    return getFilesTypesFromList(projectTree.items);
};
