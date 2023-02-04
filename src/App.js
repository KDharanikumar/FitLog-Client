import Menu from "../src/Components/Menu";
import Navigation from "../src/Components/Navigation";
import "./App.css";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <section className="App">
      <Menu />
      <Navigation />
      <Footer />
    </section>
  );
};

export default App;
