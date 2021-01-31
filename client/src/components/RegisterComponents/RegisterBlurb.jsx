import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
export default function RegisterBlurb() {
  return (
    <Paper elevation={3} className="register-blurb" color="secondary">
      <div>Not registered yet and want to join or start a project?</div>
      <Link className="register-button" to="/register">
        <Button className="register-button" variant="contained" color="primary">
          Register Here!
        </Button>
      </Link>
    </Paper>
  );
}
