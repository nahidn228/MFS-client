import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../providers/AuthProvider";

const Registration = () => {
  const navigate = useNavigate();
  const { createUser,  setUser } = useContext(AuthContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const nid = form.nid.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    const pin = form.pin.value;
    console.log({ email, nid, name, mobile, pin });
    try {
      //2. User Registration
      const result = await createUser(email, pin);
      console.log(result);

      setUser({ ...result.user, displayName: name });
      toast.success("Signup Successful");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="py-10 ">
      <div className="flex justify-center mx-auto">
        <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
      </div>

      <p className="mt-3 text-xl text-center text-gray-600 ">New To Here!</p>
      <form onSubmit={handleSignUp} className="card-body">
        {/* Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        {/* NID */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">NID</span>
          </label>
          <input
            type="number"
            name="nid"
            placeholder="Your NID Number"
            className="input input-bordered"
            required
          />
        </div>
        {/* Mobile Number */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="number"
            name="mobile"
            placeholder="Mobile Number"
            className="input input-bordered"
            required
          />
        </div>
        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        {/* PIN */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pin</span>
          </label>
          <input
            type="password"
            name="pin"
            placeholder="Your 5 digit Pin"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center">
        <Link
          to="/login"
          className="text-xs text-gray-500 uppercase  hover:underline"
        >
          or sign in
        </Link>
      </div>
    </div>
  );
};

export default Registration;
