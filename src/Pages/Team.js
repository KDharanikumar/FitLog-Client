import axios from "axios";
import { useEffect, useState } from "react";
import BannerImg from "../Components/BannerImg";

const Team = () => {
	const [testm, settestm] = useState([]);

	useEffect(() => {
		testData();
	}, []);

	const testData = async () => {
		const response = await axios.get("https://testimonialapi.toolcarton.com/api");

		settestm(response.data);
	};
	return (
		<section>
			<BannerImg title="TEAM" />
			<div className="container">
				<div className="row justify-content-center gap-4 p-5">
					{testm.slice(0, 8).map((tm) => {
						return (
							<div class="card fl-team-card text-center py-2" key={tm.id}>
								<div class="card-body">
									<img src={tm.avatar} alt="team-img" className="fl-team-member mb-4"></img>
									<h5 className="fw-bold">{tm.name}</h5>
									<h6>{tm.designation}</h6>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Team;
