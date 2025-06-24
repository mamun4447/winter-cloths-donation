import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center p-6">
      <h1 className="text-7xl font-bold text-red-600">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Page not found</h2>
      <p className="text-base-content mt-2 max-w-md">
        The page you are looking for doesn’t exist or has been moved. Let’s get
        you back where it’s warm.
      </p>

      <Link
        to="/"
        className="btn bg-[#13221b] text-white hover:bg-green-900 mt-6"
      >
        🏠 Back to Home
      </Link>

      {/* Optional Image */}
      {/* <img
        src="https://illustrations.popsy.co/gray/error-404.svg"
        alt="404 Illustration"
        className="w-72 mt-8"
      /> */}
    </div>
  );
};

export default ErrorPage;
