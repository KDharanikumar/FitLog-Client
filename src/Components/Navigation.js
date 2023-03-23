import { Route, Routes } from "react-router-dom";
import Aboutus from "../Pages/Aboutus";
import Calculators from "../Pages/Calculators";
import Contact from "../Pages/Contact";
import ForgotPassword from "../Pages/ForgotPassword";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Team from "../Pages/Team";

const Navigation = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="aboutus" element={<Aboutus />} />
			<Route path="Calculators" element={<Calculators />} />
			<Route path="services" element={<Services />} />
			<Route path="team" element={<Team />} />
			<Route path="contact" element={<Contact />} />
			<Route path="signin" element={<SignIn />} />
			<Route path="signup" element={<SignUp />} />
			<Route path="forgotpassword" element={<ForgotPassword />} />
		</Routes>
	);
};

export default Navigation;
