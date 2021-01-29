import axios from "axios";
import { useState } from "react";
import "./styles/main.css";
import "./App.css";
import Layout from "./components/shared/Layout/Layout";
import MainContainer from "./containers/MainContainer/MainContainer";
import { Switch, useHistory } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  });

  return (
    <div className="App">
      <Layout currentUser={currentUser}>
        <Switch>
          <Route>
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
