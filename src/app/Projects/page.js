import ProjectsCard from "../components/ProjectsCard";
import ProjectsTitle from "../components/ProjectsTitle";

export default function ProjectsPage() {
  return (
    <section className="relative landscape:h-[600px] w-full h-[120vh]">
      <ProjectsTitle />
      <ProjectsCard />
    </section>
  );
}
