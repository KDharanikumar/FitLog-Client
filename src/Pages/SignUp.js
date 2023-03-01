import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<section>
			<div className="container fl-signup my-5">
				<div className="row">
					<div className="col d-flex justify-content-center">
						<div className="card fl-signup-card text-center p-4 m-auto">
							<h1 className="mb-3">Sign Up</h1>
							<div className="card-body">
								<form>
									<input type="Text" className="form-control mb-3" id="exampleInputText" placeholder="Name" />
									<input type="email" className="form-control mb-3" id="exampleInputEmail1" placeholder="E-Mail" />
									<input
										type="password"
										className="form-control mb-3"
										id="exampleInputPassword1"
										placeholder="Password"
									/>
									<input
										type="password"
										className="form-control mb-4"
										id="exampleInputPassword1"
										placeholder="Confirm Password"
									/>
								</form>
								<button type="submit" className="fl-button mb-4">
									Sign Up
								</button>
								<div>
									Already have an account?
									<Link to="/signin" style={{ textDecoration: "none", color: "#1693ab" }}>
										<span className="fs-6"> SignIn</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
