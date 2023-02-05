import BannerImg from "../Components/BannerImg";
import Service from "../Data/Services.json";

const Services = () => {
  return (
    <section>
      <BannerImg title="SERVICES" />
      <div className="container fl-services py-5">
        <h1 className="page-topic text-center mb-5">OUR SERVICES</h1>
        <div className="row d-flex justify-content-center gap-5">
          {Service.map((data) => (
            <div class="card fl-service-card text-center">
              <div class="card-body">
                <img src={data.logo} alt="contact-img" className="mb-4"></img>
                <h5>{data.name}</h5>
                <p>{data.descrip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
