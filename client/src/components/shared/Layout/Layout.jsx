import Nav from "../Nav/Nav";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout">
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
}
