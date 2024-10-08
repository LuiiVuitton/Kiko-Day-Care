import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

import About from "./pages/About";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is imported

import Logo from "./assets/KikoLogoPink7.png";

import Contact from "./pages/Contact";
import Home2 from "./pages/Home2";
import Services from "./pages/Services";
import Staff from "./pages/Staff"; // Import Staff component

import Downloads from "./pages/Downloads";

import Calender from "./components/Calender";

function App() {
  return (
    <Router>
      <NavBar logoSrcPath={Logo} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Home2 />
              <Calender />

              <Downloads />
              <Staff />

              <About />
              <Services />
              <Contact />
            </>
          }
        />
        <Route path="/staff" element={<Staff />} /> {/* Add Staff route */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
