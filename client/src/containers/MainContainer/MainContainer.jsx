import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ProjectDetail from "../../screens/ProjectDetail/ProjectDetail";
import ProjectForm from "../../screens/ProjectForm/ProjectForm";
import LandingPage from "../../screens/LandingPage/LandingPage";
import {
  deleteProject,
  getUserProjects,
  postProject,
  putProject,
} from "../../services/projects";
import { filterProjects } from "../../services/projectFunctions";

export default function MainContainer(props) {
  const { setCurrentProject, setProjects } = props;
  const [myProjects, setMyProjects] = useState([]);
  // const [myRoles, setMyRoles] = useState([]);
  const history = useHistory();
  const [uniqueProjects, setUniqueProjects] = useState([]);

  const fetchProjects = async () => {
    const projectRoles = await getUserProjects();
    const projectsAll = projectRoles.map((item) => item.project);
    setMyProjects(projectsAll);
    // setMyRoles(projectRoles);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    setUniqueProjects(filterProjects(myProjects));
  }, [myProjects]);

  useEffect(() => {
    setProjects(uniqueProjects);
  }, [uniqueProjects, setProjects]);

  const handleCreate = async (projectData) => {
    const newProject = await postProject(projectData);
    setMyProjects((prevState) => [...prevState, newProject]);
    setProjects(uniqueProjects);
    history.push(`/project/${newProject.id}`);
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    setMyProjects((prevState) =>
      prevState.filter((project) => {
        return project.id !== id;
      })
    );
    setProjects(uniqueProjects);
    history.push("/");
  };

  const handleUpdate = async (id, projectData) => {
    const updatedProject = await putProject(id, projectData);
    setMyProjects((prevState) =>
      prevState.map((project) => {
        return project.id === parseInt(id) ? updatedProject : project;
      })
    );
    history.push("/");
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
        <ProjectForm
          handleCreate={handleCreate}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          projects={uniqueProjects}
          setCurrentProject={setCurrentProject}
        />
      </Route>
      <Route path="/project-edit/:id">
        <ProjectForm
          handleCreate={handleCreate}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          projects={uniqueProjects}
          setCurrentProject={setCurrentProject}
        />
      </Route>
      <Route path="/">
        <LandingPage uniqueProjects={uniqueProjects} />
      </Route>
    </Switch>
  );
}
