import "./App.css";
import Background from "./components/background";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [currentNav, setCurrentNav] = useState("Work");

  const handleHamburgerToggle = () => {
    setOpenHamburger(!openHamburger);
  };

  const handleNavChange = (nav) => {
    setCurrentNav(nav);
  };
  return (
    <>
      <Router>
        <Background />
        <div className="homeWrapper">
          <Header
            openHamburger={openHamburger}
            handleHamburgerToggle={handleHamburgerToggle}
            currentNav={currentNav}
            handleNavChange={handleNavChange}
            setCurrentNav={setCurrentNav}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  openHamburger={openHamburger}
                  handleHamburgerToggle={handleHamburgerToggle}
                  currentNav={currentNav}
                  handleNavChange={handleHamburgerToggle}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  openHamburger={openHamburger}
                  handleHamburgerToggle={handleHamburgerToggle}
                  currentNav={currentNav}
                  handleNavChange={handleHamburgerToggle}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact
                  openHamburger={openHamburger}
                  handleHamburgerToggle={handleHamburgerToggle}
                  currentNav={currentNav}
                  handleNavChange={handleHamburgerToggle}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
