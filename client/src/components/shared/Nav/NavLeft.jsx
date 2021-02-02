import NavLeftLinks from "./NavLeftLinks";
import { ProjectsContext } from "../../../context/ProjectsContext";
import { Link } from "react-router-dom";
import { Button, ListItem } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";

export default function NavLeft(props) {
  return (
    <div className="nav-left">
      <ProjectsContext.Consumer>
        {(value) => {
          return <NavLeftLinks projects={value} />;
        }}
      </ProjectsContext.Consumer>
      <div className="nav-left-bottom">
        <Link className="nav-left-link" to="/create-project">
          <Button variant="outlined" color="secondary">
            New Project
          </Button>
        </Link>
        <div className="copyright">
          <CopyrightIcon color="secondary" fontSize="small" />
          <span className="my-name"> Evyn Newton 2021</span>
        </div>
      </div>
    </div>
  );
}
