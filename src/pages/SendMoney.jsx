import { useNavigate } from "react-router-dom";
const SendMoney = () => {
  const navigate = useNavigate();

  // Email Password Signin
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pin = form.pin.value;
    console.log({ email, pin });
    navigate("/");
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
      <h2 className="text-center text-4xl font-extrabold ">Send Money</h2>
     
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
             Number
          </label>
        </div>
        <div className="relative">
          <input
            placeholder="pin"
            className="peer h-10 w-full border-b-2 border-gray-300  bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
            required=""
            id="amount"
            name="amount"
            type="amount"
          />
          <label
            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            htmlFor="Pin"
          >
            Amount
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
       
        <button
          className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
          type="submit"
        >
          Send Money
        </button>
      </form>
    </div>
  );
};

export default SendMoney;
