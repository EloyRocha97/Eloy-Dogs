import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Home, Landing, Form, Detail } from "./Views";
import NavBar from "./Components/NavBar/navBar";
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.baseURL = "https://eloy-dogs-front.onrender.com";

function App() {
  // const location = useLocation;

  return (
    <div className="App">
      {/* {location.pathname !== "/" && <NavBar />} */}
      <Route
        path={[
          "/home",
          "/recipes",
          "/about",
          "/addrecipes",
          `/dogs`,
          "/create",
        ]}
        component={NavBar}
      />
      <Route exact path="/" component={Landing} />

      <Route path="/home" render={() => <Home />} />

      <Route
        exact
        path="/dogs/:id"
        render={({ match }) => <Detail id={match.params.id} />}
      />
      <Route path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
