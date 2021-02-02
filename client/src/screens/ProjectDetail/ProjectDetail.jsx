import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import QuickLinks from "../../components/QuickLinks/QuickLinks";
import Information from "../../components/Information/Information";
import { Backdrop, CircularProgress } from "@material-ui/core";
import CenterDiv from "../../components/CenterDiv/CenterDiv";

export default function ProjectDetail(props) {
  const { projects, setCurrentProject } = props;
  const [project, setProject] = useState({});
  const params = useParams();

  useEffect(() => {
    const project = projects.filter(
      (item) => item.id === parseInt(params.id)
    )[0];
    setProject(project);
    setCurrentProject(project);

    return function cleanup() {
      setCurrentProject({});
    };
  }, [projects, params.id, setCurrentProject]);

  return (
    <>
      {project ? (
        <div className="project-detail-container">
          <QuickLinks project={project} />
          <CenterDiv project={project} />
          <Information project={project} />
        </div>
      ) : (
        <div className="project-detail-container">
          <Backdrop>
            <CircularProgress />
          </Backdrop>
        </div>
      )}
    </>
  );
}
