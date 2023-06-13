import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <nav>
            <ul id="navigation">
              <li>
                <Link to="/test-react-github">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/test-react-github" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
