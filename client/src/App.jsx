import { theme } from "./styles/muiTheme";
import { useState, useEffect } from "react";
import "./styles/main.css";
import Layout from "./components/shared/Layout/Layout";
import { Route, Switch, useHistory } from "react-router-dom";
import LandingPageLoggedOut from "./screens/LandingPage/LandingPageLoggedOut";
import MainContainer from "./containers/MainContainer/MainContainer";
import Register from "./screens/Register/Register";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import { ThemeProvider } from "@material-ui/core";
import { UserContext } from "./context/UserContext";
import { ProjectContext } from "./context/ProjectContext";
import { ProjectsContext } from "./context/ProjectsContext";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentProject, setCurrentProject] = useState({});
  const [projects, setProjects] = useState([]);
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
        <UserContext.Provider value={currentUser}>
          <ProjectsContext.Provider value={projects}>
            <ProjectContext.Provider value={currentProject}>
              <Layout handleLogout={handleLogout}>
                <Switch>
                  <Route path="/register">
                    <Register handleRegister={handleRegister} />
                  </Route>
                  <Route path="/">
                    {currentUser ? (
                      <MainContainer
                        setCurrentProject={setCurrentProject}
                        setProjects={setProjects}
                      />
                    ) : (
                      <LandingPageLoggedOut handleLogin={handleLogin} />
                    )}
                  </Route>
                </Switch>
              </Layout>
            </ProjectContext.Provider>
          </ProjectsContext.Provider>
        </UserContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
