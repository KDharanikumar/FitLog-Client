import { Link } from "react-router-dom";

const SignIn = () => {
	return (
		<section>
			<div className="container fl-signin my-5">
				<div className="row">
					<div className="col d-flex justify-content-center">
						<div className="card fl-signin-card text-center p-4 m-auto">
							<h1 className="mb-3">Sign In</h1>
							<div className="card-body">
								<form className="fl-signin-form">
									<input type="email" className="form-control mb-4" id="exampleInputEmail1" placeholder="E-Mail" />
									<input type="password" className="form-control mb-4" id="exampleInputPassword1" placeholder="Password" />
								</form>
								{/* <div className="text-end mb-4">
                  <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
                    <span className="text-black">Forgot Password?</span>
                  </Link>
                </div> */}

								<button type="submit" className="fl-button mb-4">
									Sign In
								</button>

								<p className="mb-0">
									Don't Have an Account?
									<Link to="/signup" style={{ textDecoration: "none", color: "#1693ab" }}>
										<span className="fs-6"> SignUp</span>
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
