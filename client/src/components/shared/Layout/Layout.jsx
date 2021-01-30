import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  const { currentUser } = props;
  return (
    <>
      <Nav currentUser={currentUser} />
      {props.children}
      <Footer />
    </>
  );
}
