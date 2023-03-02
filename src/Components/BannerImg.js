const BannerImg = ({ title }) => {
	return (
		<div className="container-fluid bg-banner">
			<div className="row">
				<div className="col d-flex justify-content-center align-items-center" style={{ height: "450px" }}>
					<h1 className="fl-banner-title">{title}</h1>
				</div>
			</div>
		</div>
	);
};
export default BannerImg;
