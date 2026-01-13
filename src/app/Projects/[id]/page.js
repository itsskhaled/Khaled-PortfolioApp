import { ProjectDetails } from "@/app/API/ProjectsDetails";
import { ProjectsHomeData } from "@/app/API/ProjectsHome";
import DetailsProject from "@/app/components/DetailsProject";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://khaled-portfolio-app.vercel.app';

export async function generateMetadata({ params: paramsPromise }) {
  const params = await paramsPromise;
  const { id } = params;
  const project = ProjectsHomeData.find((Project) => Project.id === id);
  const projectinfo = ProjectDetails.find(
    (projectinfo) => projectinfo.id === id
  );

  if (!project || !projectinfo) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const projectName = project.name;
  const projectDescription = projectinfo.Overview || `Details about ${projectName} project by Khaled, a Front-End Engineer.`;

  return {
    title: `${projectName} - Project Details`,
    description: projectDescription.substring(0, 160),
    keywords: [
      projectName,
      ...project.lang,
      "Web Development",
      "Front-End Development",
      "Portfolio Project",
      "Khaled Portfolio",
    ],
    openGraph: {
      title: `${projectName} - Khaled Portfolio`,
      description: projectDescription.substring(0, 160),
      url: `${baseUrl}/Projects/${id}`,
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: projectName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectName} - Khaled Portfolio`,
      description: projectDescription.substring(0, 160),
      images: [`${baseUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/Projects/${id}`,
    },
  };
}

export default async function GetProject({ params: paramsPromise }) {
  const params = await paramsPromise;
  const { id } = params;
  const project = ProjectsHomeData.find((Project) => Project.id === id);
  const projectinfo = ProjectDetails.find(
    (projectinfo) => projectinfo.id === id
  );

  if (!project) {
    return <h1>Project Not Found!</h1>;
  }

  // Structured data for the project
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.name,
    "description": projectinfo?.Overview || "",
    "creator": {
      "@type": "Person",
      "name": "Khaled",
      "jobTitle": "Front-End Engineer",
    },
    "datePublished": projectinfo?.ReleaseDate || "",
    "keywords": project.lang?.join(", ") || "",
    "url": project.href || `${baseUrl}/Projects/${id}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <DetailsProject project={project} projectinfo={projectinfo} />
    </>
  );
}
