import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AuthForms from "./components/AuthForms";
import HomePage from "./components/homepage/HomePage";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";
import Packages from "./components/Packages";
import Services from "./components/Services";

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
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<AuthForms />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/services/*" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
