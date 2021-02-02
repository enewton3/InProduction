import { Divider, Paper } from "@material-ui/core";

export default function Information(props) {
  const { project } = props;
  return (
    <Paper
      elevation={3}
      className="information-container"
      style={{ backgroundColor: "#a4a2a2", color: "white" }}
    >
      <div className="project-information-blurb">
        <div className="info-head">Information</div>
        <Divider />
        <div>{project.description}</div>
      </div>
      <div className="important-contacts"></div>
    </Paper>
  );
}
