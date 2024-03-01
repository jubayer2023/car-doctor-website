import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const serviceData = useLoaderData();
  const { _id, title, price } = serviceData;
  return (
    <div className=" min-h-screen bg-base-200">
      <form className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-0">
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
          </div>
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
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-block btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
