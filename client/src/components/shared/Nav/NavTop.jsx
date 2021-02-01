import { Link } from "react-router-dom";
import { ProjectContext } from "../../../context/ProjectContext";
import { UserContext } from "../../../context/UserContext";
import NavProjectInfo from "./NavProjectInfo";
import UserMenu from "./UserMenu";

export default function NavTop(props) {
  const { handleLogout } = props;

  return (
    <div className="nav-top">
      <Link className="logo" to="/">
        InProduction
      </Link>
      <ProjectContext.Consumer>
        {(project) => {
          return (
            <>
              {project && Object.keys(project).length > 0 ? (
                <NavProjectInfo project={project} />
              ) : (
                <div></div>
              )}
            </>
          );
        }}
      </ProjectContext.Consumer>
      <div className="logged-in-options">
        <UserContext.Consumer>
          {(user) => {
            return (
              <>
                {user && Object.keys(user).length > 0 ? (
                  <UserMenu currentUser={user} handleLogout={handleLogout} />
                ) : null}
              </>
            );
          }}
        </UserContext.Consumer>
      </div>
    </div>
  );
}
