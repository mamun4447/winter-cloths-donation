import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import toast from "react-hot-toast";
// import your Firebase registration methods here

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, userDetailSet, googleLogIn } = useContext(AuthContext);

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

  //===>Handle Create User<===/
  const handleCreateUser = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    //==Create user==//
    createUser(email, password)
      .then((response) => {
        setError("");
        //==User Details Set==//
        toast.success(
          response?.user?.displayName,
          "User Successfully Created!"
        );
        userDetailSet({ displayName: name, photoURL: photo })
          .then((res) => {
            // console.log(res);
            navigate(location?.state ? location?.state : "/");
          })

          .catch((er) => {
            const erText = er?.code?.split("/");
            setError(erText[1]);
            toast.error(erText[1]);
          });
      })
      .catch((err) => {
        const errText = err?.code?.split("/");
        setError(errText[1]);
        toast.error(errText[1]);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 text-[#13221b]">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          {/* 🏠 Home Button */}
          <div className="text-right mb-2">
            <Link to="/" className="btn btn-xs btn-outline">
              🏠 Home
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-center mb-4">
            Create Your Account
          </h2>

          <form onSubmit={handleCreateUser} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
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

            <button className="btn  bg-[#13221b] text-white hover:bg-green-900 w-full">
              Register
            </button>
          </form>

          <div className="text-center mt-3">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-sm w-full"
            >
              <FaGoogle />
              Continue with Google
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="link hover:text-green-900">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
