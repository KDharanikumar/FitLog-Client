// import axios from "axios";
// import { useFormik } from "formik";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const SignIn = () => {
// 	const navigate = useNavigate();

// 	let formik = useFormik({
// 		initialValues: {
// 			email: "",
// 			password: "",
// 		},
// 		validate: (values) => {
// 			const errors = {};
// 			if (!values.email) {
// 				errors.email = "Email is Required";
// 			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
// 				errors.email = "Invalid Email Address";
// 			}
// 			if (!values.password) {
// 				errors.password = "Password is Required";
// 			}
// 			return errors;
// 		},
// 		onSubmit: async (values) => {
// 			try {
// 				const response = await axios.post("https://addresss-book-server.onrender.com/users/signin", { ...values });
// 				//   console.log(response)
// 				if (response) {
// 					localStorage.setItem("token", response.data);

// 					const Token = localStorage.getItem("token");
// 					console.log(Token);
// 					Token ? navigate("/") : navigate("signin");
// 				}
// 			} catch (error) {
// 				console.log(error.response.data.meg);
// 				Swal.fire({
// 					title: "Wrong Details",
// 					icon: "error",
// 					confirmButtonText: "okay",
// 				});
// 			}
// 		},
// 	});

// 	return (
// 		<section>
// 			<div className="container fl-signin my-5">
// 				<div className="row">
// 					<div className="col d-flex justify-content-center">
// 						<div className="card fl-signin-card text-center p-4 m-auto">
// 							<h1 className="mb-3">Sign In</h1>
// 							<div className="card-body">
// 								<form className="fl-signin-form" onSubmit={formik.handleSubmit}>
// 									<span style={{ color: "#ff014f" }}>{formik.touched.email && formik.errors.email}</span>
// 									<input
// 										type="email"
// 										className="form-control mb-4"
// 										name="email"
// 										placeholder="Email"
// 										onChange={formik.handleChange}
// 										value={formik.values.email}
// 									/>
// 									<span style={{ color: "#ff014f" }}>{formik.touched.password && formik.errors.password}</span>
// 									<input
// 										type="password"
// 										className="form-control mb-4"
// 										name="password"
// 										placeholder="Password"
// 										onChange={formik.handleChange}
// 										value={formik.values.password}
// 									/>

// 									<button type="submit" className="fl-button mb-4" value={"Login"}>
// 										Sign In
// 									</button>
// 									<p className="mb-0">
// 										Don't Have an Account?
// 										<Link to="/signup" style={{ textDecoration: "none", color: "#1693ab" }}>
// 											<span className="fs-6"> SignUp</span>
// 										</Link>
// 									</p>
// 								</form>
// 								<div className="login-details">
// 									<p>User : admin@gmail.com</p>
// 									<p>Password : welcome</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default SignIn;
