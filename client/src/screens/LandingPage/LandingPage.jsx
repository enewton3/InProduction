import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function LandingPage(props) {
  const { myProjects } = props;
  const [uniqueProjects, setUniqueProjects] = useState([]);

  const filterProjects = () => {
    const filteredProjects = [];
    myProjects.forEach((item) => {
      const hasItem = filteredProjects.findIndex((x) => x.id === item.id);
      // debugger;
      if (hasItem <= -1) {
        filteredProjects.push(item);
      }
    });
    return filteredProjects;
  };
  useEffect(() => {
    // debugger;
    setUniqueProjects(filterProjects());
  }, [myProjects]);

  return (
    <div className="landing-page-container">
      <div className="project-cards">
        {uniqueProjects
          ? uniqueProjects.map((item) => {
              return <ProjectCard project={item} />;
            })
          : null}
      </div>
      <div className="updates"></div>
    </div>
  );
}
