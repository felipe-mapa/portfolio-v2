import {
    faBrain,
    faLaptopCode,
    faQuestion,
} from "@fortawesome/free-solid-svg-icons";

// TODO: Update icons
export const getIconByFileType = (fileType: string) => {
    switch (fileType) {
        case "tsx":
            return faLaptopCode;
        case "ts":
            return faBrain;
        default:
            return faQuestion;
    }
};
