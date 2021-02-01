import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ProjectDetail from "../../screens/ProjectDetail/ProjectDetail";
import ProjectForm from "../../screens/ProjectForm/ProjectForm";
import LandingPage from "../../screens/LandingPage/LandingPage";
import { getUserProjects, postProject } from "../../services/projects";
import { filterProjects } from "../../services/projectLists";

export default function MainContainer(props) {
  const { setCurrentProject, setProjects } = props;
  const [myProjects, setMyProjects] = useState([]);
  const [myRoles, setMyRoles] = useState([]);
  const history = useHistory();
  const [uniqueProjects, setUniqueProjects] = useState([]);

  const fetchProjects = async () => {
    const projectRoles = await getUserProjects();
    const projectsAll = projectRoles.map((item) => item.project);
    setMyProjects(projectsAll);
    setMyRoles(projectRoles);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    setUniqueProjects(filterProjects(myProjects));
  }, [myProjects]);

  useEffect(() => {
    setProjects(uniqueProjects);
  }, [uniqueProjects]);

  const handleCreate = () => {
    // const newProject = await postProject(projectData)
    // setMyProjects()
  };

  return (
    <Switch>
      <Route path="/project/:id">
        <ProjectDetail
          projects={uniqueProjects}
          setCurrentProject={setCurrentProject}
        />
      </Route>
      <Route path="/create-project">
        <ProjectForm />
      </Route>
      <Route path="/project-edit/:id">
        <ProjectForm />
      </Route>
      <Route path="/">
        <LandingPage uniqueProjects={uniqueProjects} />
      </Route>
    </Switch>
  );
}
