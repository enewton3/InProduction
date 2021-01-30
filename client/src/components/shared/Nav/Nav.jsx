import NavTop from "./NavTop";
import NavLeft from "./NavLeft";

export default function Nav(props) {
  const { currentUser } = props;
  return (
    <>
      <NavTop currentUser={currentUser} />
      {currentUser && <NavLeft />}
    </>
  );
}
