import { Divider, Paper } from "@material-ui/core";
import defaultImage from "../../assets/images/defaultCardImage.jpg";

export default function CenterDiv(props) {
  const { project } = props;
  return (
    <Paper
      elevation={3}
      className="center-detail-div"
      style={{ backgroundColor: "#a4a2a2", color: "white" }}
    >
      <img
        className="project-detail-image"
        src={project.image_url ? project.image_url : defaultImage}
        alt={project.name}
      />
      <Divider />
      <div className="recent-project-updates">
        <div className="recent-head">Recent</div>
        <Divider />
      </div>
    </Paper>
  );
}
