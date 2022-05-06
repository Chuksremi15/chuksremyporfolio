import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Various components
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Services from "./components/pages/Services";
import Process from "./components/pages/Process";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

//hooks
import ScrollToTheTop from "./components/hooks/ScrollToTheTop";

import "./App.css";
import "./scss/style.scss";

function App() {
  return (
    <Router>
      <ScrollToTheTop />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/projects" component={Projects} /> */}
        {/* <Route exact path="/services" component={Services} /> */}
        <Route exact path="/process" component={Process} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
