import RegisterBlurb from "../../components/RegisterComponents/RegisterBlurb";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LandingPageLoggedOut(props) {
  return (
    <div className="landing-page-logged-out">
      <RegisterBlurb />
      <LoginForm handleLogin={props.handleLogin} />
    </div>
  );
}
