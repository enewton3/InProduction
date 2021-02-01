import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectMainForm from "../../components/ProjectMainForm/ProjectMainForm";

export default function ProjectForm(props) {
  const {
    handleCreate,
    handleDelete,
    handleUpdate,
    setCurrentProject,
    projects,
  } = props;
  const [formData, setFormData] = useState({
    name: "",
    venue: "",
    description: "",
    url: "",
    image: "",
    start_date: "2021-01-01",
    end_date: "2021-02-02",
  });
  const params = useParams();
  const id = parseInt(params.id);

  useEffect(() => {
    if (id) {
      const project = projects.filter(
        (item) => item.id === parseInt(params.id)
      )[0];
      setCurrentProject(project);
    }

    return function cleanup() {
      setCurrentProject({});
    };
  }, [projects]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      handleUpdate(id, formData);
    } else {
      handleCreate(formData);
    }
  };

  return (
    <div className="project-form-container">
      <div className="project-forms">
        <ProjectMainForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
        <div className="roles-form">Roles form</div>
      </div>
      <Button>Delete Project</Button>
    </div>
  );
}
