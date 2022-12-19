// import { FaArrowAltCircleRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
import BannerImg from "../Components/BannerImg";
import Dietitian from "../Images/Dietitian.png";

const Services = () => {
  return (
    <section>
      <BannerImg title="SERVICES" />

      <div className="container fl-services p-5">
        <div className="row d-flex justify-content-center gap-4">
          <div class="card fl-service-card text-center p-3">
            <div class="card-body">
              <img src={Dietitian} alt="contact-img"></img>

              <h4 className="fw-bold">Health Coach</h4>

              <p>Taking seamless key performance indicators offline to.</p>
              {/* <Link to="healthcoach">
                <FaArrowAltCircleRight className="service-icon" />
              </Link> */}
            </div>
          </div>

          <div class="card fl-service-card text-center p-3">
            <div class="card-body">
              <img src={Dietitian} alt="contact-img"></img>

              <h4 className="fw-bold">Weight Gain</h4>

              <p>Taking seamless key performance indicators offline to.</p>
              {/* <Link to="healthcoach">
                <FaArrowAltCircleRight className="service-icon" />
              </Link> */}
            </div>
          </div>

          <div class="card fl-service-card text-center p-3">
            <div class="card-body">
              <img src={Dietitian} alt="contact-img"></img>

              <h4 className="fw-bold">Right Nutrition</h4>

              <p>Taking seamless key performance indicators offline to.</p>
              {/* <Link to="healthcoach">
                <FaArrowAltCircleRight className="service-icon" />
              </Link> */}
            </div>
          </div>

          <div class="card fl-service-card text-center p-3">
            <div class="card-body">
              <img src={Dietitian} alt="contact-img"></img>

              <h4 className="fw-bold">Motivation</h4>

              <p>Taking seamless key performance indicators offline to.</p>
              {/* <Link to="healthcoach">
                <FaArrowAltCircleRight className="service-icon" />
              </Link> */}
            </div>
          </div>

          <div class="card fl-service-card text-center p-3">
            <div class="card-body">
              <img src={Dietitian} alt="contact-img"></img>

              <h4 className="fw-bold">Workout</h4>

              <p>Taking seamless key performance indicators offline to.</p>
              {/* <Link to="healthcoach">
                <FaArrowAltCircleRight className="service-icon" />
              </Link> */}
            </div>
          </div>

          <div class="card fl-service-card text-center p-3">
            <div class="card-body">
              <img src={Dietitian} alt="contact-img"></img>

              <h4 className="fw-bold">Online Course</h4>

              <p>Taking seamless key performance indicators offline to.</p>
              {/* <Link to="healthcoach">
                <FaArrowAltCircleRight className="service-icon" />
              </Link> */}
            </div>
          </div>

          <div class="card fl-service-card text-center p-3">
            <div class="card-body">
              <img src={Dietitian} alt="contact-img"></img>

              <h4 className="fw-bold">Fat Loss</h4>

              <p>Taking seamless key performance indicators offline to.</p>
              {/* <Link to="healthcoach">
                <FaArrowAltCircleRight className="service-icon" />
              </Link> */}
            </div>
          </div>
          <div class="card fl-service-card text-center p-3">
            <div class="card-body">
              <img src={Dietitian} alt="contact-img"></img>

              <h4 className="fw-bold">Perfect Diet</h4>

              <p>Taking seamless key performance indicators offline to.</p>
              {/* <Link to="healthcoach">
                <FaArrowAltCircleRight className="service-icon" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
