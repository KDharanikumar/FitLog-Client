const BannerImg = ({ title }) => {
	return (
		<div className="container-fluid fl-contact bg-banner">
			<div className="row">
				<div className="col-md-12 d-flex justify-content-center align-items-center" style={{ height: "450px" }}>
					<h1 className="fl-page-title">{title}</h1>
				</div>
			</div>
		</div>
	);
};
export default BannerImg;
