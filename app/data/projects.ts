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
    githubUrl?: string;
    thumbnailImage: string;
}

interface WebProject extends ProjectBase {
    type: "web";
    linkUrl: string;
}

interface MobileProject extends ProjectBase {
    type: "mobile";
    googlePlayUrl?: string;
    appStoreUrl?: string;
}

export type Project = WebProject | MobileProject;

const projects: Project[] = [
    {
        type: "mobile",
        id: "dartboard-scorer",
        name: "Dartboard Scorer",
        description:
            "An app created in my free time for the company's darts competition. Uses React Native with in-app purchase.",
        iconImage: DartboardIcon,
        thumbnailImage: DartboardThumbnail,
        googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.pavanela.dartboardscorer",
    },
    {
        type: "web",
        id: "commute-visualiser",
        name: "NZ Commute Data Visualiser",
        description:
            "An interactive application created for StatsNZ competition to visualise New Zealanders' commute information from the 2018 census. It displays the information through different types of graphs (Victory), table (material-table) and on a map (D3 and react-simple-maps). The data is saved in a MySQL database, requested with axios and PHP and managed with Redux. The design was built with MaterialUI.",
        iconImage: CommuteIcon,
        thumbnailImage: CommuteThumbnail,
        linkUrl: "https://felipepavanela78601.ipage.com/commuter-view/",
    },
    {
        type: "mobile",
        id: "flag-finder",
        name: "Flag Finder",
        description:
            "A flag characteristics search engine developed with React Native (Expo), for android only at the moment. The app also includes a flag quiz game. The data is retrieve from an API which uses Docker and is built with PHP, slim4 and MySQL.",
        iconImage: FlagFinderIcon,
        thumbnailImage: FlagFinderThumbnail,
        githubUrl: "https://github.com/felipe-mapa/flag-finder-mob",
        googlePlayUrl:
            "https://play.google.com/store/apps/details?id=com.pavanela.flag_finder",
    },
];

const getProjectById = (projectId: string): Project | undefined => {
    return projects.find((project) => {
        return project.id === projectId;
    });
};

export { projects, getProjectById };
