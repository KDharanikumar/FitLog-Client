import React from "react";

const Portfolio = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <h1 className="text-center mb-5">Daily Activity Log</h1>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Age
          </label>
          <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Age" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Duration
          </label>
          <input type="Number" class="form-control" id="exampleFormControlInput1" placeholder="Duration" />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Activity
          </label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Activity" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Details & Description
          </label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
