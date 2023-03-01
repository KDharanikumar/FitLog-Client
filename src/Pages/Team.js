import BannerImg from "../Components/BannerImg";
import Teams from "../Data/TeamData.json";

const Team = () => {
	return (
		<section>
			<BannerImg title="TEAM" />
			<div className="container fl-services p-0 my-5">
				<div className="row d-flex justify-content-center gap-5">
					<h1 className="page-topic text-center">OUR TEAMS</h1>
					{Teams.map((data) => (
						<div className="card fl-team-card text-center p-2">
							<div className="card-body">
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
