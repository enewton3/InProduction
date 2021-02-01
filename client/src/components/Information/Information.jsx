import { Paper } from "@material-ui/core";

export default function Information(props) {
  const { project } = props;
  return (
    <Paper className="information-container">
      <div className="project-information-blurb">
        <div className="info-head">Information</div>
        <div>{project.description}</div>
      </div>
      <div className="important-contacts"></div>
    </Paper>
  );
}
