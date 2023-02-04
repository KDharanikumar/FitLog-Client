import BannerImg from "../Components/BannerImg";
import Teams from "../Data/TeamData.json";

const Team = () => {
  return (
    <section>
      <BannerImg title="SERVICES" />
      <div className="container fl-services py-5">
        <h1 className="page-topic text-center mb-5">OUR TEAMS</h1>
        <div className="row d-flex justify-content-center gap-5">
          {Teams.map((data) => (
            <div class="card fl-team-card text-center p-2">
              <div class="card-body">
                <img src={data.avatar} alt="contact-img" className="mb-4"></img>
                <h5 className="mb-3">{data.name}</h5>
                <p className="mb-0">{data.designation}</p>
                <p>{data.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
