import logImg from "../../assets/images/login/login.svg";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-8 md:gap-16 lg:gap-20">
        <div className="text-center w-1/2 md:w-2/3 lg:w-full">
          <img src={logImg} alt="" />
        </div>
        <div className="card  w-2/3 md:w-full shadow-2xl bg-base-100">
          <h1 className="text-3xl px-6 pt-6 font-bold">Login Now</h1>

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
