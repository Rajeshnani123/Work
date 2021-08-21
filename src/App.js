import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/index";
import Design from "./pages/design";
import SlidePage from "./pages/slides";
import WorkPage from "./pages/work";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/designs">
          <div class="others">
            <div class="App">
              <h1>Sri Durga Glass</h1>
              <header className="App-header">
                <h2 className="title">Our Glass</h2>
                <h1 className="title"> Your's Choice</h1>
              </header>
            </div>
            <Design />
          </div>
        </Route>
        <Route exact path="/Slides">
          <div class="others">
            <div class="App">
              <h1>Sri Durga Glass</h1>
              <header className="App-header">
                <h2 className="title">Our Glass</h2>
                <h1 className="title"> Your's Choice</h1>
              </header>
            </div>
            <SlidePage />
          </div>
        </Route>
        <Route exact path="/Works">
          <div class="others">
            <div class="App">
              <h1>Sri Durga Glass</h1>
              <header className="App-header">
                <h2 className="title">Our Glass</h2>
                <h1 className="title"> Your's Choice</h1>
              </header>
            </div>
            <WorkPage />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
