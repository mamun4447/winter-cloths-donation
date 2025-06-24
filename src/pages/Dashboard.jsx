import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider"; // replace with your actual auth context
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext); // should contain displayName, email, photoURL

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary">
            Welcome, {user?.displayName || "Friend"}! 👋
          </h2>
          <p className="text-base-content mt-2">This is your dashboard.</p>
        </div>

        <div className="flex flex-col items-center mt-6 space-y-4">
          <img
            src={
              user?.photoURL || "https://i.ibb.co/5nZ5vG5/default-avatar.png"
            }
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-primary"
          />
          <div className="text-center">
            <p className="text-lg font-medium">{user?.displayName}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
          <Link
            to="/update-profile"
            className="btn btn-outline btn-primary mt-4"
          >
            ✏️ Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
