import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    const pin = form.pin.value;
    console.log({ email, pin });
    // try {
    //   //User Login
    //   await signIn(email, pin);
    //   toast.success("Signin Successful");
    //   navigate(from, { replace: true });
    // } catch (err) {
    //   console.log(err);
    //   toast.error(err?.message);
    // }
  };

  return (
    <div className="  max-w-lg w-full bg-white rounded-xl shadow-2xl overflow-hidden p-8 space-y-8">
      <h2 className="text-center text-4xl font-extrabold ">Welcome</h2>
      <p className="text-center ">Sign in to your account</p>
      <form onSubmit={handleSignIn} className="space-y-6">
        <div className="relative">
          <input
            placeholder="Email or Number"
            className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
            required=""
            id="email"
            name="email"
            type="email"
          />
          <label
            className="absolute left-0 -top-3.5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            htmlFor="email"
          >
            Email or Number
          </label>
        </div>
        <div className="relative">
          <input
            placeholder="pin"
            className="peer h-10 w-full border-b-2 border-gray-300  bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
            required=""
            id="pin"
            name="pin"
            type="password"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            htmlFor="Pin"
          >
            Pin
          </label>
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm ">
            <input
              className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
              type="checkbox"
            />
            <span className="ml-2">Remember me</span>
          </label>
          <a className="text-sm text-gray-400 hover:underline" href="#">
            Forgot your password?
          </a>
        </div>
        <button
          className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <div className="text-center text-gray-400">
        Don't have an account?
        <Link to="/registration" className="text-purple-500 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
