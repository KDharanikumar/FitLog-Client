import Service from "../Data/Services.json";
import Teams from "../Data/TeamData.json";

const Home = () => {
  return (
    <section>
      {/* HOME BANNER START */}
      <div className="container-fluid home-banner d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="fl-homebanner-text text-center">
            <h3>YOUR HEALTH COACH</h3>
            <h2>We Stay Fit With Our Best Coach</h2>
            {/* <p>
              Whether your aim is to loose weight, tone up, gain weight we can put together a gym programme or recommend
              the right classes for you to attend in our studios.
            </p> */}
          </div>
        </div>
      </div>
      {/* HOME BANNER END */}
      {/* TESTIMONIAL START */}
      <div className="container-fluid" style={{ backgroundColor: "#CFF2F8" }}>
        <div className="container fl-testmonial py-5" style={{ backgroundColor: "#CFF2F8" }}>
          <div className="row text-center">
            <h5 className="mb-3 fw-bold">TESTIMONIAL</h5>
            <h1 className="mb-5">What Client Say's</h1>

            <div className="mb-3 d-flex flex-wrap align-items-center justify-content-center gap-3">
              {Teams.slice(0, 3).map((data) => (
                <div className="card client-say">
                  <div className="card-body">
                    <img src={data.avatar} alt="contact-img" className="mb-4"></img>
                    <h5>{data.name}</h5>
                    <p className="mb-0">{data.designation}</p>
                    <p>{data.location}</p>
                    <p>{data.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONIAL END */}
      {/* HOME SERVICES START */}
      <div className="container fl-services py-5">
        <h1 className="page-topic text-center mb-5">OUR SERVICES</h1>
        <div className="row d-flex justify-content-center gap-5">
          {Service.map((data) => (
            <div class="card fl-service-card text-center p-2">
              <div class="card-body">
                <img src={data.logo} alt="contact-img" className="mb-4"></img>
                <h5>{data.name}</h5>
                <p>{data.descrip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* HOME SERVICES END */}
      <div className="container fl-pricing py-5">
        <h1 className="page-topic text-center mb-5">OUR PRICING</h1>
        <div className="row d-flex justify-content-center gap-5">
          <div class="card fl-pricing-card text-center p-2">
            <div class="card-body">
              <h6>
                <u>BASIC</u>
              </h6>
              <h6>
                $10<span>/Month</span>
              </h6>
              <ul>
                <li>Review Your Question</li>
                <li>Review Your Question</li>
                <li>Review Your Question</li>
                <li>Review Your Question</li>
                <li>Review Your Question</li>
              </ul>
            </div>
          </div>

          <div class="card fl-pricing-card text-center p-2">
            <div class="card-body">
              <h6>
                <u>BASIC</u>
              </h6>
              <h6>
                $10<span>/Month</span>
              </h6>
              <ul>
                <li>Review Your Question</li>
                <li>Review Your Question</li>
                <li>Review Your Question</li>
                <li>Review Your Question</li>
                <li>Review Your Question</li>
              </ul>
            </div>
          </div>

          <div class="card fl-pricing-card text-center p-2">
            <div class="card-body">
              <h6>
                <u>BASIC</u>
              </h6>
              <h6>
                $10<span>/Month</span>
              </h6>
              <ul>
                <li>Review Your Question</li>
                <li>Review Your Question</li>
                <li>Review Your Question</li>
                <li>Review Your Question</li>
                <li>Review Your Question</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
