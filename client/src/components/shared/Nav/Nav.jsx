import NavTop from "./NavTop";
import NavLeft from "./NavLeft";

export default function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <>
      <NavTop currentUser={currentUser} handleLogout={handleLogout} />
      {currentUser && <NavLeft />}
    </>
  );
}
