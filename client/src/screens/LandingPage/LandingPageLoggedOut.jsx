import RegisterBlurb from "../../components/RegisterComponents/RegisterBlurb";
import LoginForm from "../../components/LoginForm/LoginForm";
import Layout from "../../components/shared/Layout/Layout";

export default function LandingPageLoggedOut(props) {
  return (
    <div className="landing-page-logged-out">
      <RegisterBlurb />
      <LoginForm handleLogin={props.handleLogin} />
    </div>
  );
}
