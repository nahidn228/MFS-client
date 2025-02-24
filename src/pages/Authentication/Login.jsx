import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  console.log(from);
  const { signIn } = useContext(AuthContext);

  // Email Password Signin
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log({ email, pass });
    try {
      //User Login
      await signIn(email, pass);
      toast.success("Signin Successful");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className=" w-full ">
      <div className="">
        <div className="flex justify-center mx-auto">
          <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 ">Welcome back!</p>

        <div className="flex items-center justify-between mt-4">
          <span className="w-full border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>
      
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              id="LoggingEmailAddress"
              autoComplete="email"
              name="email"
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
              id="loggingPassword"
              autoComplete="current-password"
              name="password"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center">
          <Link
            to="/registration"
            className="text-xs text-gray-500 uppercase  hover:underline"
          >
            or sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
