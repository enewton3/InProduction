import { Avatar } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavTop(props) {
  const [userMenuToggle, setUserMenuToggle] = useState(false);
  const { currentUser } = props;

  const loggedIn = (
    <>
      <div className="greeting">Hi, {currentUser?.username}</div>
      <Avatar
        alt={currentUser?.username}
        src={currentUser?.prof_pic}
        onClick={() => setUserMenuToggle((prev) => !prev)}
      />
    </>
  );

  const loggedOut = null;

  return (
    <div className="nav-top">
      <Link className="logo" to="/">
        InProduction
      </Link>
      <div>{currentUser ? loggedIn : loggedOut}</div>
    </div>
  );
}
