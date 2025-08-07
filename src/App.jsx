import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Various components
import Home from "./components/pages/Home";
import About from "./components/pages/About";
// import Contact from "./components/pages/Contact";

//hooks
import ScrollToTheTop from "./components/hooks/ScrollToTheTop";

import "./index.css";

function App() {
  return (
    <Router>
      <ScrollToTheTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}

        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
