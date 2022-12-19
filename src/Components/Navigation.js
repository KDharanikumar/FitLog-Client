import { Route, Routes } from "react-router-dom";
import Aboutus from "../Pages/Aboutus";
import CalculationPages from "../Pages/CalculationPages";
import Calculators from "../Pages/Calculators";
import Contact from "../Pages/Contact";
import ForgotPassword from "../Pages/ForgotPassword";
import Home from "../Pages/Home";
// import Portfolio from "../Pages/Portfolio";
import Services from "../Pages/Services";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Team from "../Pages/Team";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="aboutus" element={<Aboutus />} />
      <Route path="team" element={<Team />} />
      <Route path="Calculators" element={<Calculators />} />
      <Route path="bmi-calculator" element={<CalculationPages />} />
      <Route path="services" element={<Services />} />
      {/* <Route path="portfolio" element={<Portfolio />} /> */}
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
    </Routes>
  );
};

export default Navigation;
