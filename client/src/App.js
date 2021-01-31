import { theme } from "./styles/muiTheme";
import { useState, useEffect } from "react";
import "./styles/main.css";
import Layout from "./components/shared/Layout/Layout";
import { Route, Switch, useHistory } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import LandingPageLoggedOut from "./screens/LandingPage/LandingPageLoggedOut";
import Register from "./screens/Register/Register";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import { ThemeProvider } from "@material-ui/core";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout currentUser={currentUser} handleLogout={handleLogout}>
          <Switch>
            <Route exact path="/">
              {currentUser ? (
                <LandingPage />
              ) : (
                <LandingPageLoggedOut handleLogin={handleLogin} />
              )}
            </Route>
            <Route path="/register">
              <Register handleRegister={handleRegister} />
            </Route>
          </Switch>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
