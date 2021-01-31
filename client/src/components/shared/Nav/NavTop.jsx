import { Avatar } from "@material-ui/core";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function NavTop(props) {
  const [anchorE1, setAnchorE1] = useState(null);
  const { currentUser, handleLogout } = props;
  const params = useParams();
  const handleClick = (e) => {
    setAnchorE1(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };

  const loggedIn = (
    <>
      <div className="greeting">Hi, {currentUser?.username}</div>
      <Avatar
        alt={currentUser?.username}
        src={currentUser?.prof_pic}
        onClick={handleClick}
        aria-controls="user-menu"
        aria-haspopup="true"
        id="user-avatar"
      />
      <Menu
        id="user-menu"
        anchorE1={anchorE1}
        keepMounted
        open={Boolean(anchorE1)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Account Settings</MenuItem>
        <MenuItem
          onClick={() => {
            handleLogout();
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );

  const loggedOut = null;

  return (
    <div className="nav-top">
      <Link className="logo" to="/">
        InProduction
      </Link>
      {/* {params.id && <div>{currentProject.name}</div>} */}
      <div className="logged-in-options">
        {currentUser ? loggedIn : loggedOut}
      </div>
    </div>
  );
}
