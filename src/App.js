import Menu from "../src/Components/Menu";
import Navigation from "../src/Components/Navigation";
import "./App.css";
import Footer from "./Components/Footer";

const App = () => {
	return (
		<section className="fullscreen">
			<section className="">
				<Menu />
				<Navigation />
				<div>
					<Footer />
				</div>
			</section>
		</section>
	);
};

export default App;
