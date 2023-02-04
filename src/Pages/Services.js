import BannerImg from "../Components/BannerImg";
import Service from "../Data/Services.json";

const Services = () => {
  return (
    <section>
      <BannerImg title="SERVICES" />
      <div className="container fl-services">
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
    </section>
  );
};

export default Services;
