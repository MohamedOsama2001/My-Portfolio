import { IProject } from "../interfaces";

const filterProjects = ({
  projects,
  filter,
  typeOfFilter,
}: {
  projects: IProject[];
  filter: string;
  typeOfFilter: "hiddenProjects" | "category";
}) => {
  // Filter by category
  if (typeOfFilter === "category") {
    if (filter === "all") return projects;
    return projects.filter((project) => {
      if (Array.isArray(project.category)) {
        return project.category.includes(filter);
      }
      return project.category === filter;
    });
  }
  // Filter hidden projects
  else {
    if (filter === "projects") return projects;
    else if (filter === "projects_hidden")
      return projects.filter((project) => project.hidden);
    else return projects.filter((project) => !project.hidden);
  }
};

export default filterProjects;
