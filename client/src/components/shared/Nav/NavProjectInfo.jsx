import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

export default function NavProjectInfo(props) {
  const { project } = props;
  return (
    <div className="nav-project-info">
      <div className="nav-project-name">{project.name}</div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <>
              {user && project.user_id === user.id && (
                <Link
                  className="nav-project-button"
                  to={`/project-edit/${project.id}`}
                >
                  <Button variant="outlined" color="secondary">
                    Project Settings
                  </Button>
                </Link>
              )}
            </>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
