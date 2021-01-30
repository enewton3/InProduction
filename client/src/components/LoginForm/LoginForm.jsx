import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { loginUser } from "../../services/auth";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        display: "flex",
        flexFlow: "column wrap",
      },
    },
  }));
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   loginUser(formData);
  // };

  return (
    <div className="login-form`">
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          variant="filled"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          variant="filled"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          label="Login!"
          variant="contained"
          color="primary"
        >
          Login!
        </Button>
      </form>
    </div>
  );
}
