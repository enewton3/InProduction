import { Paper } from "@material-ui/core";
// import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function LandingPage(props) {
  const { uniqueProjects } = props;

  return (
    <div className="landing-page-container">
      <div className="project-cards-container">
        <div className="project-card-heading">Your Projects</div>
        <div className="project-cards">
          {uniqueProjects
            ? uniqueProjects.map((item) => {
                return <ProjectCard key={`card${item.id}`} project={item} />;
              })
            : null}
        </div>
      </div>
      <div className="updates-container">
        <div className="updates-header">Project Updates</div>
        <Paper className="updates-paper"></Paper>
      </div>
    </div>
  );
}
