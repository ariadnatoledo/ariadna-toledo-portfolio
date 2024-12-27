"use client";
import ProjectCard from "@/components/ProjectCard";
import { projects as ProjectsData } from "../../../data";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import { useState } from "react";
import { Category } from "../../../type";

function ProjectsPage() {
  const [projects, setProjects] = useState(ProjectsData);
  const [active, setActive] = useState("all");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(ProjectsData);
      setActive(category);
      return;
    }

    const newArray = ProjectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectsNavbar
        handlerFilterCategory={handleFilterCategory}
        active={active}
      />

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-6"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
