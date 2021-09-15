import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GreenScreen from "./components/GreenScreen/GreenScreen";
import RedScreen from "./components/RedScreen/RedScreen";
import YellowScreen from "./components/YellowScreen/YellowScreen";

function App() {
  const direction = JSON.parse(window.localStorage.getItem("direction"));
  if (!direction)
    window.localStorage.setItem("direction", JSON.stringify(true));

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/green" />
          </Route>
          <Route exact path="/red">
            <RedScreen />
          </Route>
          <Route exact path="/yellow">
            <YellowScreen />
          </Route>
          <Route exact path="/green">
            <GreenScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
