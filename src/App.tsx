import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is imported

import Logo from "./assets/KikoLogoPink5.png";
import SlideImage1 from "./assets/Kids5.jpg";
import SlideImage2 from "./assets/Kids7.jpg";
import SlideImage3 from "./assets/Kids3.jpg";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home2 from "./pages/Home2";
import Services from "./pages/Services";
import Staff from "./pages/Staff"; // Import Staff component
import AboutImage from "./assets/KikoLogo.jpg";

function App() {
  return (
    <Router>
      <NavBar logoSrcPath={Logo} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home
                SlideImage1SrcPath={SlideImage1}
                SlideImage2SrcPath={SlideImage2}
                SlideImage3SrcPath={SlideImage3}
              />
              <Home2 imageSrcPath={AboutImage} />
              <Services />
              <Contact />
            </>
          }
        />
        <Route
          path="/about"
          element={<About AboutImageSrcPath={AboutImage} />}
        />
        <Route path="/staff" element={<Staff />} /> {/* Add Staff route */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
