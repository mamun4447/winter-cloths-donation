import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
// import your Firebase auth methods here

const LogIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Example: await signInWithEmail(form.email, form.password)
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
      toast.error("Login failed: " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Example: await signInWithGoogle()
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error("Google login failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
            Login to Continue
          </h2>

          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
              value={form.password}
              onChange={handleChange}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

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
