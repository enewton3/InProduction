import Nav from "../Nav/Nav";

export default function Layout(props) {
  const { currentUser } = props;
  return (
    <div className="layout">
      <Nav currentUser={currentUser} />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
}
