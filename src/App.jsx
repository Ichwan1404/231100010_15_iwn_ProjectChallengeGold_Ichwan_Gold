import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarCom from "./components/NavbarCom";
// import FooterCom from "./components/FooterCom";

import HomePage from "./Pages1/HomePage";
import OurServicePage from "./Pages1/OurServicePage";
import FaqPage from "./Pages1/FaqPage";
import TestimonialPage from "./Pages1/TestimonialPage";
import WhyUsPage from "./Pages1/WhyUsPage";
import CariMobil from "./Pages2/CariMobil";
import DetailMobil from "./Pages2/DetailMobil"; 
import HasilMobil from "./Pages2/HasilMobil";

function App() {
  return (
    <div>
      <NavbarCom />
    
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="Ourservice" Component={OurServicePage} />
        <Route path="Faq" Component={FaqPage} />
        <Route path="Testimonial" Component={TestimonialPage} />
        <Route path="Whyus" Component={WhyUsPage} />
        <Route path="/CariMobil" Component={CariMobil} />
        <Route path="/CariMobil/HasilMobil/" Component={HasilMobil} />
        <Route path="/CariMobil/HasilMobil/DetailMobil/:id" Component={DetailMobil} />
      </Routes>
    
      {/* <FooterCom /> */}
    </div>
  );
}

export default App;
