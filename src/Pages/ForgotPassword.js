const ForgotPassword = () => {
  return (
    <div className="container fl-forgotpassword">
      <div className="row">
        <div className="col">
          <h1 className="text-center m-5">Forgot Password</h1>
          <div class="card fl-forgotpassword-card text-center">
            <div class="card-body">
              <form className="mb-3">
                <label className="form-label">E-Mail</label>
                <input type="email" className="form-control mb-4" id="exampleInputEmail1" />
                <button type="submit" className="fl-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
