import React from "react";
import {
  FaHandsHelping,
  FaMapMarkerAlt,
  FaTshirt,
  FaUserFriends,
} from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div>
      <section className="bg-base-100 py-16 px-4 text-center text-[#13221b]">
        <h2 className="text-4xl font-bold mb-10">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="p-6 rounded-xl shadow-lg bg-base-200">
            <FaTshirt className="text-4xl text-[#13221b] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Gather Warm Clothes</h3>
            <p>
              Collect clean and usable winter clothes like jackets, blankets,
              and sweaters.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-xl shadow-lg bg-base-200">
            <FaUserFriends className="text-4xl text-[#13221b] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Login & Fill Donation Form
            </h3>
            <p>
              Sign in to your account and submit the donation form with item
              details.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-xl shadow-lg bg-base-200">
            <FaMapMarkerAlt className="text-4xl text-[#13221b] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Set Pickup Location</h3>
            <p>
              Enter your address so our volunteers can collect the donation from
              you.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-xl shadow-lg bg-base-200">
            <FaHandsHelping className="text-4xl text-[#13221b] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">We Distribute</h3>
            <p>
              Our team delivers the clothes to people in need across Bangladesh.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
