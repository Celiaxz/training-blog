import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Blog from "./Blog";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/Blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
