import type { ReactNode } from "react";

export interface WithChildrenProp {
    children: ReactNode;
}

interface ProjectItemBase {
    type: "folder" | "file";
    title: string;
    id: string;
}

export interface ProjectItemFolder extends ProjectItemBase {
    type: "folder";
    items: ProjectItem[];
}

export interface ProjectItemFile extends ProjectItemBase {
    type: "file";
    fileType: "ts" | "tsx";
}

export type ProjectItem = ProjectItemFolder | ProjectItemFile;

export interface ProjectTree {
    title: string;
    items: ProjectItem[];
}
