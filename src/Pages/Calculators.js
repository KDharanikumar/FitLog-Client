import { Link } from "react-router-dom";
import BannerImg from "../Components/BannerImg";
import bmr from "../Images/bmr.jpg";
import bodyfat from "../Images/bodyfat.jpg";
import macros from "../Images/macros.jpg";
import rm from "../Images/rm.jpg";

const Calculators = () => {
  return (
    <section>
      <section>
        <BannerImg title="CALCULATORS" />
      </section>
      <div className="container fl-calculator p-5">
        <div className="row text-center">
          <div>
            <h1>Track your progress</h1>
            <p>Use our free fitness tools & trackers to take your journey to the next level!</p>
          </div>
        </div>

        <div className="row d-flex justify-content-center gap-4 my-5">
          <div class="card fl-calculator-card">
            <div class="card-body">
              <img src={bmr} class="card-img-top" alt="Bmr" />
              <h5 class="card-title">BMR Calculator</h5>
              <p class="card-text">
                Your basal metabolic rate (BMR) is the number of calories your body needs to sustain itself if you do
                absolutely nothing all day.
              </p>
              <Link to="/bmi-calculator">
                <button className="fl-button">Calculate Now</button>
              </Link>
            </div>
          </div>

          <div class="card fl-calculator-card">
            <div class="card-body">
              <img src={macros} class="card-img-top" alt="Bmr" />
              <h5 class="card-title">Macro Calculator</h5>
              <p class="card-text">
                Macronutrients are the nutrients that your body needs in large quantities—including fats, proteins,
                carbs, water and fibre.
              </p>
              <Link to="/bmi-calculator">
                <button className="fl-button">Calculate Now</button>
              </Link>
            </div>
          </div>

          <div class="card fl-calculator-card">
            <div class="card-body">
              <img src={rm} class="card-img-top" alt="Bmr" />
              <h5 class="card-title">1 Rep Max Calculator</h5>
              <p class="card-text">
                1 Rep Max (1RM) is the maximum weight that can be lifted in a specific exercise in 1 repetition... This
                determines your strength level for that exercise.
              </p>
              <Link to="/bmi-calculator">
                <button className="fl-button">Calculate Now</button>
              </Link>
            </div>
          </div>

          <div class="card fl-calculator-card">
            <div class="card-body">
              <img src={bodyfat} class="card-img-top" alt="Bmr" />
              <h5 class="card-title">Body Fat % Calculator</h5>
              <p class="card-text">
                Body fat percentage is a key indicator of good health. A high body fat % might put you at a greater risk
                of lifestyle diseases.
              </p>
              <Link to="/bmi-calculator">
                <button className="fl-button">Calculate Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculators;
