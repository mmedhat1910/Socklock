import React from "react";
import "./App.scss";
import "./assets/css/components/navbar.scss";
import "./assets/bootstrap/css/bootstrap.css";
import Navbar from "./components/navbar";

import "./assets/fontawesome/all.min.css";
import LandingMain from "./components/landing-main";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingMain />
      <Footer />
    </div>
  );
}

export default App;
