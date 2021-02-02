// import { useEffect, useState } from "react";
import { Divider, Paper } from "@material-ui/core";
// import { getProjectRoles } from "../../services/roles";

export default function Information(props) {
  // const [roles, setRoles] = useState([]);
  const { project } = props;

  // const fetchRoles = async () => {
  //   const project_roles = await getProjectRoles(project.id);
  //   setRoles(project_roles);
  // };

  // useEffect(() => {
  //   fetchRoles();
  // }, [project]);

  return (
    <Paper
      elevation={3}
      className="information-container"
      style={{ backgroundColor: "#a4a2a2", color: "white" }}
    >
      <div className="project-information-blurb">
        <div className="info-head">Information</div>
        <Divider />
        <div>Project Description</div>
        <div>{project.description}</div>
        <div>Start Date</div>
        <div>{project.start_date}</div>
        <div>End Date</div>
        <div>{project.end_date}</div>
      </div>
      <div className="important-contacts">
        <Divider />
        <div className="info-head">Important Contacts</div>
        <Divider />
      </div>
    </Paper>
  );
}
