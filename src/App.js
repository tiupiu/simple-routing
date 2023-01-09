import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Activities from "./components/Activities";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <div className="App">
      <p>Hello World!</p>

      <BrowserRouter>
        <div className="Navigation">
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/activities"style={{ marginRight: '15px' }}>Activities</Link>
          <Link to="/hobbies">Hobbies</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
