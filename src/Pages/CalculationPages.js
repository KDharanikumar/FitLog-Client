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
      <BannerImg title="BMI CALCULATOR" />

      <div className="container">
        <div className="row ">
          <div className="col-md-5 calc-bg">
            <form onSubmit={calculatebmi}>
              <div className="mb-3">
                <label for="weight" className="form-label">
                  Weight
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  id="weight"
                />
              </div>

              <div className="mb-3">
                <label for="height" className="form-label">
                  Height
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  id="height"
                />
              </div>

              <button type="submit" className="btn btn-primary mb-3 w-100">
                Submit
              </button>
              <button className="btn btn-primary mb-3 w-100" onClick={Reload}>
                Reload
              </button>
            </form>
          </div>
          <div className="col-md-7 p-3 text-center">
            <div>
              <p>Fill the required details and your results will appear here!</p>
              <h4>Your BMI is</h4>
              <div className="">
                <h4 className="bmi-val text-center">{bmi}</h4>
              </div>
              <p>{message}</p>
              <img src={imgsrc} alt="" className="img"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CalculationPages;
