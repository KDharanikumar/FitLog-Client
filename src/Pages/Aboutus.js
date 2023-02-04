import BannerImg from "../Components/BannerImg";
import About1 from "../Images/About1.jpg";

const Aboutus = () => {
  return (
    <section>
      <BannerImg title="ABOUT" />
      <div className="container fl-about-content">
        <h1 className="page-topic text-center my-5">ABOUT US</h1>
        <div className="row">
          <div className="col-md-6 p-4">
            <h2>We Help To Get Fitness Goal</h2>
            <p>
              I appreciate your coaching center really good environment and excellent student training. You are
              continuously handle student training wonderfully. Thanks for your great service. I appreciate your
              coaching center really good environment and excellent student training.
            </p>
          </div>
          <div className="col-md-6 fl-aboutus-img p-4 text-center">
            <img src={About1} alt="contact-img"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
