import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AuthForms from "./components/AuthForms";
import HomePage from "./components/homepage/HomePage";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";
import Packages from "./components/Packages";
import Services from "./components/Services";
import Aboutpage from "./components/aboutpage/Aboutpage";
import Navbar from "./components/homepage/Navbar";
import Footer from "./components/Footer";

function App() {
  if (window.innerWidth < 1024)
    return (
      <div className="text-black text-center font-medium">
        This website is under development, Kindly see in desktop for current
        status.
      </div>
    );
  return (
    <Router>
      <Navbar />
      <div className="mt-24 text-secondary-text">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/signin" element={<AuthForms />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/services/*" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
