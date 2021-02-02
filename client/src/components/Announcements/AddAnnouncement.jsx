import {
  Avatar,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState } from "react";
import { postAnnouncement } from "../../services/announcements";
import { useParams } from "react-router-dom";
// import AccountCircle from "@material-ui/icons/AccountCircle";

export default function AddAnnouncement(props) {
  const params = useParams();
  // const history = useHistory();
  const { currentUser, setAnnouncedToggle } = props;
  const [formData, setFormData] = useState({
    content: "",
    user_id: currentUser.id,
    project_id: parseInt(params.id),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postAnnouncement(formData);
    setAnnouncedToggle((prev) => !prev);
    setFormData((prevState) => ({
      ...prevState,
      content: "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="add-announcement-form">
      <TextField
        size="small"
        name="content"
        label="Add Announcement"
        className="announcement-input"
        value={formData.content}
        onChange={handleChange}
        style={{ paddingTop: "1vh", marginTop: "1vh", width: "80%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Avatar
                src={currentUser.prof_pic}
                alt={currentUser.username}
                style={{ height: "20px", width: "20px" }}
              />
            </InputAdornment>
          ),
        }}
      />
      <IconButton type="submit" className="submit-announce">
        <AddBoxIcon />
      </IconButton>
    </form>
  );
}
