import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { Paper } from "@material-ui/core";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const { username, email, password, passwordConfirmation } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const passwordMatch = () => {
  //   if (password === passwordConfirmation) {
  //     return true;
  //   }
  // };

  return (
    <Paper className="register-div">
      <form
        className="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <TextField
          className="register-input"
          name="username"
          label="Username"
          type="username"
          value={username}
          variant="filled"
          onChange={handleChange}
          required
        />
        <TextField
          className="register-input"
          name="email"
          label="Email"
          type="email"
          value={email}
          variant="filled"
          onChange={handleChange}
          required
        />
        <TextField
          className="register-input"
          name="password"
          label="Password"
          type="password"
          value={password}
          variant="filled"
          onChange={handleChange}
          required
        />
        <TextField
          className="register-input"
          name="passwordConfirmation"
          label="Confirm Password"
          type="password"
          value={passwordConfirmation}
          variant="filled"
          onChange={handleChange}
          required
          // error={passwordMatch}
          // helperText="Passwords do not match."
        />
        <Button
          className="register-button"
          variant="contained"
          color="primary"
          type="submit"
        >
          Register!
        </Button>
      </form>
    </Paper>
  );
}
