import { redirect } from "@remix-run/node";
import { projects } from "~/data/projects";

export const loader = async () => {
    // Show first project in the list
    const projectId = projects[0].id;
    return redirect(`/projects/${projectId}`);
};
