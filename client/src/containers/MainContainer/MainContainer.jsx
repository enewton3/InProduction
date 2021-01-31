import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ProjectDetail from "../../screens/ProjectDetail/ProjectDetail";
import ProjectForm from "../../screens/ProjectForm/ProjectForm";
import LandingPage from "../../screens/LandingPage/LandingPage";
import { getUserProjects, postProject } from "../../services/projects";

export default function MainContainer(props) {
  const [myProjects, setMyProjects] = useState([]);
  const [myRoles, setMyRoles] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  const fetchProjects = async () => {
    const projectRoles = await getUserProjects();
    const projectsAll = projectRoles.map((item) => item.project);
    setMyProjects(projectsAll);
    setMyRoles(projectRoles);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreate = () => {
    // const newProject = await postProject(projectData)
    // setMyProjects()
  };

  return (
    <Switch>
      <Route path="/project/:id">
        <ProjectDetail />
      </Route>
      <Route path="/create-project">
        <ProjectForm />
      </Route>
      <Route path="/project/:id/edit">
        <ProjectForm />
      </Route>
      <Route path="/">
        <LandingPage myProjects={myProjects} />
      </Route>
    </Switch>
  );
}
