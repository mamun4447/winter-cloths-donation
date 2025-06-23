import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import your Firebase registration methods here

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isPasswordValid = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;
    return hasUpper && hasLower && isLongEnough;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!isPasswordValid(form.password)) {
      return setError(
        "Password must have an uppercase letter, a lowercase letter, and be at least 6 characters."
      );
    }

    try {
      // Example:
      // await registerWithEmail(form.name, form.email, form.photo, form.password);
      toast.success("Registration successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error("Registration failed: " + err.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      // Example:
      // await signInWithGoogle();
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      toast.error("Google login failed: " + err.message);
    }
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

          <form onSubmit={handleRegister} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
              value={form.name}
              onChange={handleChange}
            />
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
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              required
              value={form.photo}
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

            <button className="btn  bg-[#13221b] text-white hover:bg-green-900 w-full">
              Register
            </button>
          </form>

          <div className="text-center mt-3">
            <button
              onClick={handleGoogleRegister}
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
