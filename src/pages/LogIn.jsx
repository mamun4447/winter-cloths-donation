import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";
// import your Firebase auth methods here

const LogIn = () => {
  const [error, setError] = useState("");

  const { userLogin, googleLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  //===> Google Login <===//
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((response) => {
        setError("");
        toast.success("User successfully Logged In!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        const errText = err.code.split("/");
        setError(errText[1]);
        toast.error(errText[1]);
      });
  };

  //===>Handle User Login with Email & Password<===//
  const handleUserLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    userLogin(email, password)
      .then((response) => {
        setError("");
        toast.success(
          response?.user?.displayName,
          "user successfully Logged In!"
        );
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        const errText = err.code.split("/");
        setError(errText[1]);
        toast.error(errText[1]);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
            Login to Continue
          </h2>

          <form onSubmit={handleUserLogin} className="space-y-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />

            <button className="btn bg-[#13221b] text-white hover:bg-green-900 w-full">
              Login
            </button>
          </form>

          <div className="text-center mt-3">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-md w-full"
            >
              {" "}
              <FaGoogle />
              Continue with Google
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm">
              Don’t have an account?{" "}
              <Link to="/register" className="link hover:text-green-800">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
