import NavLeftLinks from "./NavLeftLinks";
import { ProjectsContext } from "../../../context/ProjectsContext";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";

export default function NavLeft(props) {
  return (
    <div className="nav-left">
      <ProjectsContext.Consumer>
        {(value) => {
          return <NavLeftLinks projects={value} />;
        }}
      </ProjectsContext.Consumer>
      <Link className="nav-left-link" to="">
        <ListItem>New Project</ListItem>{" "}
      </Link>
    </div>
  );
}
