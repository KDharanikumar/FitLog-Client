import { Link } from "react-router-dom";
import logo from "../Images/fitnesslogo.png";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg fl-box-shadow">
      <div className="container justify-content-around align-items-center p-3">
        <ul className="logo">
          <li>
            <Link to="/">
              <img src={logo} alt="" className="w-30" />
            </Link>
          </li>
        </ul>

        <div className="row">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="aboutus">About Us</Link>
              </li>

              <li className="nav-item">
                <Link to="calculators">Calculators</Link>
              </li>

              <li className="nav-item">
                <Link to="services">Services</Link>
              </li>

              <li className="nav-item">
                <Link to="team">Team</Link>
              </li>
              {/* <li className="nav-item">
								<Link to="portfolio">Portfolio</Link>
							</li> */}
              <li className="nav-item">
                <Link to="contact">Contact</Link>
              </li>
            </ul>

            {/* <div className="d-flex">
							<li className="nav-item me-5">
								<Link to="signin">SignIn</Link>
							</li>
							<li className="nav-item">
								<Link to="signup">SignUp</Link>
							</li>
						</div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
