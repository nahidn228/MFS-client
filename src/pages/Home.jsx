import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="">
      <Link to="/login" className="btn btn-primary">
        Login
      </Link>
      <Link to="/registration" className="btn btn-primary">
        Register
      </Link>
    </div>
  );
};

export default Home;
