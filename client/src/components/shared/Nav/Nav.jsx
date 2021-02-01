import NavTop from "./NavTop";
import NavLeft from "./NavLeft";
import { UserContext } from "../../../context/UserContext";

export default function Nav(props) {
  const { handleLogout } = props;
  return (
    <nav>
      <NavTop handleLogout={handleLogout} />
      <UserContext.Consumer>{(value) => <NavLeft />}</UserContext.Consumer>
    </nav>
  );
}
