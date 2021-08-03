import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/header";
import Footer from "./components/Layout/footer";
import SlidePage from "./pages/slides";
import WorkPage from "./pages/workPage";
import ContactPage from "./pages/contactuspage";

import Design from "./pages/designPage";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/designs">
          <div className="App">
            <h1>Sri Durga Glass</h1>
            <header className="App-header">
              <h2 className="title">Our Glass</h2>
              <h1 className=""> Your's Choice</h1>
            </header>
          </div>
          <Design />
        </Route>
        <Route exact path="/Slides">
          <div className="App">
            <h1>Sri Durga Glass</h1>
            <header className="App-header">
              <h2 className="title">Our Glass</h2>
              <h1 className=""> Your's Choice</h1>
            </header>
          </div>
          <SlidePage />
        </Route>
        <Route exact path="/Works">
          <div className="App">
            <h1>Sri Durga Glass</h1>
            <header className="App-header">
              <h2 className="title">Our Glass</h2>
              <h1 className=""> Your's Choice</h1>
            </header>
          </div>
          <WorkPage />
        </Route>
        <Route exact path="/contactUs">
          <ContactPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
