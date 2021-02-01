import Nav from "../Nav/Nav";

export default function Layout(props) {
  const { handleLogout } = props;
  return (
    <div className="layout">
      <Nav handleLogout={handleLogout} />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
}
