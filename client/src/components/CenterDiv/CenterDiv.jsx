import { Divider, Paper } from "@material-ui/core";
import { useState, useEffect } from "react";
import defaultImage from "../../assets/images/defaultCardImage.jpg";
import { getProjectAnnouncements } from "../../services/announcements";
import Announcements from "../Announcements/Announcements";

export default function CenterDiv(props) {
  const [announcements, setAnnouncements] = useState([]);
  const { project } = props;

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const anns = await getProjectAnnouncements(project.id);
      setAnnouncements(anns);
    };
    fetchAnnouncements();
  }, []);

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
        <div className="recent-head">Recent Updates</div>
        <Divider />
        <Announcements announcements={announcements} />
      </div>
    </Paper>
  );
}
