import { uniqueId } from "lodash";
import type { ProjectTree } from "./types";

export const projectTree: ProjectTree = {
    title: "felipe_pavanela",
    items: [
        {
            id: uniqueId(),
            type: "folder",
            title: "sections",
            items: [
                {
                    id: uniqueId(),
                    type: "file",
                    title: "welcome",
                    fileType: "tsx",
                },
                {
                    id: uniqueId(),
                    type: "file",
                    title: "about",
                    fileType: "tsx",
                },
                {
                    id: uniqueId(),
                    type: "file",
                    title: "projects",
                    fileType: "tsx",
                },
            ],
        },
        {
            id: uniqueId(),
            type: "folder",
            title: "utils",
            items: [
                {
                    id: uniqueId(),
                    type: "file",
                    title: "skills",
                    fileType: "ts",
                },
            ],
        },
        {
            id: uniqueId(),
            type: "folder",
            title: "hooks",
            items: [
                {
                    id: uniqueId(),
                    type: "file",
                    title: "useContactForm",
                    fileType: "ts",
                },
            ],
        },
    ],
};
