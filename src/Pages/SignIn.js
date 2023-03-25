import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
	const navigate = useNavigate();

	let formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validate: (values) => {
			const errors = {};
			if (!values.email) {
				errors.email = "Email is Required";
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = "Invalid email address";
			}
			if (!values.password) {
				errors.password = "Password is Required";
			}
			return errors;
		},
		onSubmit: async (values) => {
			try {
				const response = await axios.post("https://pizza-server-39ry.onrender.com/users/signin", { ...values });
				//   console.log(response)
				if (response) {
					localStorage.setItem("token", response.data);

					const Token = localStorage.getItem("token");
					// console.log(Token);
					Token ? navigate("/calculators") : navigate("signin");
				}
			} catch (error) {
				console.log(error.response.data.msg);
				Swal.fire({
					title: "Wrong Details",
					icon: "error",
					confirmButtonText: "okay",
				});
			}
		},
	});

	return (
		<section className="fl-signin">
			<div className="container p-0">
				<div className="row ">
					<div className="col">
						<div className="card fl-signin-card d-flex justify-content-center align-items-center mx-auto text-center">
							<div className="card-body">
								<h1>Sign In</h1>
								<form onSubmit={formik.handleSubmit}>
									<div className="my-4">
										<span style={{ color: "red" }}>{formik.touched.email && formik.errors.email}</span>
										<input
											type="email"
											className="form-control"
											name="email"
											placeholder="Email"
											onChange={formik.handleChange}
											value={formik.values.email}
										/>
										<br />
										<span style={{ color: "red" }}>{formik.touched.password && formik.errors.password}</span>
										<input
											type="password"
											className="form-control"
											name="password"
											placeholder="Password"
											onChange={formik.handleChange}
											value={formik.values.password}
										/>
									</div>
									<div className="d-grid gap-4 mb-3">
										<div className="d-grid gap-4 mb-3">
											<input type="submit" className="form-control" style={{ backgroundColor: "#1693ab", color: "#fff" }} value={"Login"} />
										</div>
									</div>
									<div className="mb-2">
										Don’t have an account?
										<span className="mx-2 fw-bold">
											<Link to="/signup" style={{ color: "#119744", textDecoration: "none" }}>
												Sign up
											</Link>
										</span>
									</div>
									<div>
										<p className="mb-0 fw-bold">User : admin@gmail.com</p>
										<p className="fw-bold">Password : welcome</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
