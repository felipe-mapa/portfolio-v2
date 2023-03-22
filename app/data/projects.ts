import DartboardThumbnail from "~/assets/images/projects/dartboard-scorer/thumbnail.png";
import FlagFinderThumbnail from "~/assets/images/projects/flag-finder/thumbnail.png";
import CommuteThumbnail from "~/assets/images/projects/commute-visualiser/thumbnail.png";

import DartboardIcon from "~/assets/images/projects/dartboard-scorer/icon.png";
import FlagFinderIcon from "~/assets/images/projects/flag-finder/icon.png";
import CommuteIcon from "~/assets/images/projects/commute-visualiser/icon.png";

export type ProjectType = "web" | "mobile";

interface ProjectBase {
    type: ProjectType;
    id: string;
    name: string;
    description: string;
    iconImage: string;
    githubUrl: string;
    thumbnailImage: string;
}

interface WebProject extends ProjectBase {
    type: "web";
}

interface MobileProject extends ProjectBase {
    type: "mobile";
    googlePlayUrl: string;
    appStoreUrl: string;
}

export type Project = WebProject | MobileProject;

const projects: Project[] = [
    {
        type: "mobile",
        id: "dartboard-scorer",
        name: "Dartboard Scorer",
        description: "",
        iconImage: DartboardIcon,
        thumbnailImage: DartboardThumbnail,
        githubUrl: "",
        googlePlayUrl: "",
        appStoreUrl: "",
    },
    {
        type: "web",
        id: "commute-visualiser",
        name: "NZ Commute Data Visualiser",
        description: "",
        iconImage: CommuteIcon,
        thumbnailImage: CommuteThumbnail,
        githubUrl: "",
    },
    {
        type: "mobile",
        id: "flag-finder",
        name: "Flag Finder",
        description: "",
        iconImage: FlagFinderIcon,
        thumbnailImage: FlagFinderThumbnail,
        githubUrl: "",
        googlePlayUrl: "",
        appStoreUrl: "",
    },
];

const getProjectById = (projectId: string): Project | undefined => {
    return projects.find((project) => {
        return project.id === projectId;
    });
};

export { projects, getProjectById };
