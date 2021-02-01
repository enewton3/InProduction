import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { CSSTransition } from "react-transition-group";
import { Avatar } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export default function UserMenu(props) {
  const { currentUser, handleLogout } = props;
  const [userMenuToggle, setUserMenuToggle] = useState(false);

  const handleClick = () => {
    setUserMenuToggle((prev) => !prev);
  };
  const handleClose = () => {
    setUserMenuToggle(false);
  };

  return (
    <>
      <div className="greeting">Hi, {currentUser.username}</div>
      <Avatar
        alt={currentUser.username}
        src={currentUser.prof_pic}
        onClick={handleClick}
        id="user-avatar"
      />

      <CSSTransition
        in={userMenuToggle}
        timeout={300}
        classNames={"user-menu"}
        unmountOnExit
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div id="user-menu" className="user-menu">
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
          </div>
        </ClickAwayListener>
      </CSSTransition>
    </>
  );
}
