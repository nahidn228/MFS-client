import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const nid = form.nid.value;
    const mobile = form.mobile.value;
    const account = form.accountType.value;
    const email = form.email.value;
    const pin = form.pin.value;
    const password = form.password.value;
    console.log({
      email,
      nid,
      name,
      mobile,
      account,
      pin,
      password,
    });
    try {
      const userInfo = {
        name,
        email,
        nid,
        mobile,
        account,
        role: account === "agent" ? "requested" : "user",
        pin,
        balance: account === "agent" ? 100000 : 40,
      };

      axios.post(`http://localhost:5000/users`, userInfo).then((res) => {
        console.log("user added to DB ==>", res.data);
        if (res.data.insertedId) {
          navigate("/");
          form.reset();
          toast.success("user created successfully");
        }
      });
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="  max-w-lg w-full bg-white rounded-xl shadow-2xl overflow-hidden p-8 space-y-8">
      <h2 className="text-center text-4xl font-extrabold ">Welcome</h2>
      <p className="text-center ">Sign in to your account</p>
      <form onSubmit={handleSignUp} className="space-y-6">
        {/* Name */}
        <div className="relative">
          <input
            placeholder="Enter Your Name"
            className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
            id="name"
            name="name"
            type="text"
          />
          <label className="absolute left-0 -top-3.5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm">
            Name
          </label>
        </div>

        {/* NID */}
        <div className="relative">
          <input
            placeholder="Enter Your NID"
            className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
            required=""
            id="nid"
            name="nid"
            type="number"
          />
          <label
            className="absolute left-0 -top-3.5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            htmlFor="NID Number"
          >
            NID Number
          </label>
        </div>

        {/* MObile Number */}
        <div className="relative">
          <input
            placeholder="Enter Your number"
            className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
            required=""
            id="number"
            name="mobile"
            type="number"
          />
          <label
            className="absolute left-0 -top-3.5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            htmlFor="Mobile Number"
          >
            Mobile Number
          </label>
        </div>

        {/* Account Type */}
        <select
          name="accountType"
          value={accountType || ""}
          onChange={(e) => setAccountType(e.target.value)}
          className="relative peer h-10 w-full border-b-2 border-gray-300 text-gray-500 bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
        >
          <option disabled value="">
            Account Type
          </option>
          <option value="user">User</option>
          <option value="agent">Agent</option>
        </select>

        {/* email */}
        <div className="relative">
          <input
            placeholder="Email or Number"
            className="peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
            required=""
            id="email"
            name="email"
            type="email"
          />
          <label
            className="absolute left-0 -top-3.5  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            htmlFor="email"
          >
            Email Address
          </label>
        </div>

        {/* Pin */}
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
        {/* Password */}
        <div className="relative">
          <input
            placeholder="password"
            className="peer h-10 w-full border-b-2 border-gray-300  bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
            required=""
            id="password"
            name="password"
            type="password"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            htmlFor="password"
          >
            Password
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
          Sign Up
        </button>
      </form>
      <div className="text-center text-gray-400">
        Do you have an account?
        <Link to="/login" className="text-purple-500 hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Registration;
