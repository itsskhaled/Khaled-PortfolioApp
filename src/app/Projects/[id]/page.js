import { ProjectsHomeData } from "@/app/API/ProjectsHome";
import DetailsProject from "@/app/components/DetailsProject";

export const metadata = {
    title: "KHALED | Project Details"
}
export default async function GetProject({ params: paramsPromise }) {
  const params = await paramsPromise;
  const { id } = params;
  const project = ProjectsHomeData.find((Project) => Project.id === id);

  if (!project) {
    return <h1>Project Not Found!</h1>;
  }

  return <DetailsProject project={project} />;
}
