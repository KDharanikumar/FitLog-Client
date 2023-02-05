import { Link } from "react-router-dom";
import logo from "../Images/fitnesslogo.png";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid menu ">
        <div className="col-3 text-center">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="img" />
          </Link>
        </div>
        <div className="col-9 text-end ps-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0 text-center">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="aboutus" className="nav-link">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="calculators" className="nav-link">
                  Calculators
                </Link>
              </li>
              <li className="nav-item">
                <Link to="services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="team" className="nav-link">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="signin" className="nav-link">
                  SignIn
                </Link>
              </li>
              <li className="nav-item">
                <Link to="signup" className="nav-link">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
