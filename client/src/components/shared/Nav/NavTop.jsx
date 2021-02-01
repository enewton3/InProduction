import { Button } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { ProjectContext } from "../../../context/ProjectContext";
import { UserContext } from "../../../context/UserContext";
import UserMenu from "./UserMenu";
export default function NavTop(props) {
  const { handleLogout } = props;
  const params = useParams();

  return (
    <div className="nav-top">
      <Link className="logo" to="/">
        InProduction
      </Link>
      <ProjectContext.Consumer>
        {(value) => {
          return (
            <div className="nav-project-info">
              {value.name ? (
                <>
                  <div className="nav-project-name">{value.name}</div>
                  <Link to={`/project-edit/${value.id}`}>
                    <Button>Project Settings</Button>
                  </Link>
                </>
              ) : null}
            </div>
          );
        }}
      </ProjectContext.Consumer>
      <UserContext.Consumer>
        {(value) => {
          return (
            <div className="logged-in-options">
              {value ? (
                <UserMenu currentUser={value} handleLogout={handleLogout} />
              ) : null}
            </div>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
