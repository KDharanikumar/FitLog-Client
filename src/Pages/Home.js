// import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { useEffect, useState } from "react";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  const [testm, settestm] = useState([]);

  useEffect(() => {
    const testData = async () => {
      const response = await axios.get("https://testimonialapi.toolcarton.com/api");
      settestm(response.data);
    };
    testData();
  }, []);

  return (
    <section>
      <div className="container-fluid fl-home bg-banner">
        <div className="row banner-center">
          <div className="fl-homebanner-text text-center">
            <h3>YOUR HEALTH COACH</h3>
            <h1 className="fl-homepage-title">We Stay Fit With Our Best Coach</h1>
            <p>
              Whether your aim is to loose weight, tone up, gain weight we can put together a gym programme or recommend
              the right classes for you to attend in our studios.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-center fw-bold my-4">OUR PRICING PLANS</h1>

      <div className="container fl-pricing">
        <div className="row">
          {/*  */}

          <div className="col-md-6">
            <div class="card fl-pricing-card text-center my-3">
              <div className="fl-pricing-plan m-auto">Free</div>
              <div class="card-body">
                <h1 className="fl-pricing-value">
                  $0
                  <span className="fs-5" style={{ color: "black" }}>
                    /Month
                  </span>
                </h1>
                <p className="my-4">A good choice when working remotely With Your Clients</p>
                <hr className=""></hr>
                <ul className="fl-pricing-card-spec p-0">
                  <li>Review Your Question</li>
                  <li>Work with Resources</li>
                  <li>Analysis of Your "I Have"</li>
                  <li>Analysis of Your "I Have"</li>
                  <li>Support & Mentoring</li>
                </ul>
                <button class="fl-button mb-2">CHOOSE PLAN</button>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="col-md-6">
            <div class="card fl-pricing-card text-center my-3">
              <div className="fl-pricing-plan m-auto">Pro</div>
              <div class="card-body">
                <h1 className="fl-pricing-value">
                  $10
                  <span className="fs-5" style={{ color: "black" }}>
                    /Month
                  </span>
                </h1>
                <p className="my-4">A good choice when working remotely With Your Clients</p>
                <hr className=""></hr>
                <ul className="fl-pricing-card-spec p-0">
                  <li>Review Your Question</li>
                  <li>Work with Resources</li>
                  <li>Analysis of Your "I Have"</li>
                  <li>Analysis of Your "I Have"</li>
                  <li>Support & Mentoring</li>
                </ul>
                <button class="fl-button mb-2">CHOOSE PLAN</button>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>

      <section className="container-fluid" style={{ backgroundColor: "#CFF2F8" }}>
        <div className="container fl-testmonial my-5 py-5" style={{ backgroundColor: "#CFF2F8" }}>
          <div className="row text-center">
            <div className="mb-3">
              <h5 className="mb-3 fw-bold">TESTIMONIAL</h5>
              <h1>What Client Say's</h1>
            </div>
            <Testimonial testm={testm} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
