import { useState } from "react";
import BannerImg from "../Components/BannerImg";

const CalculationPages = () => {
  // Bmi Formula
  // weight(kg)/height(m*m)
  // let weight = 80
  // let height = 180/100
  // result = weight/height*height
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");

  let calculatebmi = (event) => {
    event.preventDefault();
    if (weight <= 0 || height <= 0) {
      alert("Please Enter Valid Height & Weight");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi.toFixed(1));

      // Messages
      if (bmi < 18) {
        setMessage("You Are Underweight");
      } else if (bmi >= 18 && bmi < 25) {
        setMessage("You Are Healthy");
      } else {
        setMessage("You Are Overweight");
      }
    }
  };
  console.log(bmi);

  let imgsrc;

  if (bmi < 1) {
    imgsrc = require("../Images/bmicalc.webp");
  } else {
    if (bmi < 18) {
      imgsrc = require("../Images/Underweight.jpg");
    } else if (bmi >= 18 && bmi < 25) {
      imgsrc = require("../Images/Healthy.webp");
    } else if (bmi > 25) {
      imgsrc = require("../Images/Overweight.png");
    } else {
      imgsrc = require("../Images/bmicalc.webp");
    }
  }

  let Reload = () => {
    window.location.reload();
  };

  return (
    <section>
      <div>
        <BannerImg title="BMI CALCULATOR" />
      </div>
      <h1 className="page-topic text-center my-5">CALCULATOR</h1>
      <div className="container fl-calculator my-5 p-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <h3 className="mb-4">
              <u>INPUT</u>
            </h3>
            <form onSubmit={calculatebmi}>
              <div className="mb-3">
                <label for="weight" className="form-label">
                  WEIGHT
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  id="weight"
                />
              </div>

              <div className="mb-4">
                <label for="height" className="form-label">
                  HEIGHT
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  id="height"
                />
              </div>

              <button type="submit" className="fl-button mb-3 w-100">
                SUBMIT
              </button>
              <button className="fl-button w-100 mb-3" onClick={Reload}>
                RELOAD
              </button>
            </form>
          </div>
          <div className="col-md-8 text-center calculation-result">
            <h3 className="mb-4">
              <u>RESULTS</u>
            </h3>
            <p className="mb-3">Fill the required details and your results will appear here!</p>
            <h5>Your BMI is</h5>
            <h4>{bmi}</h4>
            <img src={imgsrc} alt="img"></img>
            <p className="bmi-msg">{message}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CalculationPages;
