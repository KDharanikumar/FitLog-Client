const Testimonial = ({ testm }) => {
	return (
		<section className="d-flex flex-wrap justify-content-center">
			{/* Testimonila Loop */}
			{testm.slice(0, 6).map((tm) => {
				return (
					<section key={tm.id} className="box-w">
						<div className="fl-testimonial-rating fs-4 mb-3">
							{/* <StarIcon
												name="star-rating"
												defaultValue={tm.rating}
												precision={0.5}
												// onChange={(event, newValue) => {
												// 	// Update the rating state when the user selects a new rating
												// }}
											/>
										 */}
						</div>

						<div className="testmonial-img my-4">
							<img src={tm.avatar} alt="contact-img"></img>
						</div>
						<div>
							<h4 className="fw-bold">{tm.name}</h4>
							<h6 className="fw-bold">{tm.designation}</h6>
							<div className="d-flex justify-content-center">
								<p className="m-10">{tm.message}</p>
							</div>
						</div>
					</section>
				);
			})}
			{/* Testimonila Loop */}
		</section>
	);
};
export default Testimonial;
