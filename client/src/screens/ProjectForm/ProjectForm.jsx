import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectMainForm from "../../components/ProjectMainForm/ProjectMainForm";
// import RolesForm from "../../components/RolesForm/RolesForm";

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
    image_url: "",
    start_date: "2021-01-01",
    end_date: "2021-02-02",
  });
  const params = useParams();
  const id = parseInt(params.id);
  const confirmMessage =
    "Are you sure you want to delete this project? This action cannot be undone.";

  useEffect(() => {
    if (id) {
      const project = projects.filter((item) => item.id === parseInt(id))[0];
      if (project) {
        setCurrentProject(project);
        setFormData(project);
      }
    }

    return function cleanup() {
      setCurrentProject({});
    };
  }, [projects, id, setCurrentProject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      handleUpdate(id, formData);
      setCurrentProject(formData);
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
        <div className="roles-form">
          <div></div>
          {/* <RolesForm /> */}
        </div>
      </div>
      {id ? (
        <Button
          variant="outlined"
          onClick={() => {
            if (window.confirm(confirmMessage)) {
              handleDelete(id);
            }
          }}
        >
          Delete Project
        </Button>
      ) : null}
    </div>
  );
}
