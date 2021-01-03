import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Project1 from "./Components/pages/Project1";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Project1" component={Project1} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
