import { Link } from "react-router-dom";
import img from "../assets/pic1.jpg";

const HeroSection = () => {
  return (
    <section className="relative z-0 h-[500px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${img}')` }}
      ></div>

      {/* Opacity Darker Overlay */}
      <div className="absolute inset-0 bg-[#13221b] opacity-60 z-10"></div>

      {/* Content (Title, Details, Button) */}
      <div className="relative z-20 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Be the Warmth in Someone’s Winter
        </h1>

        <p className="text-lg sm:text-xl mb-8">
          Thousands in People are facing the cold without proper clothing. Your
          donation can bring them comfort, warmth, and hope. Help make a
          difference today.
        </p>
        {/*
          - text-lg/xl: Responsive text size for description.
          - mb-8: Margin bottom for spacing.
        */}

        <Link
          to={"/campaigns"}
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-[#13221b] font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Donate
        </Link>
        {/*
          - inline-block: Allows padding and margin, but stays in flow.
          - bg-yellow-500: Standard yellow background for the button.
          - hover:bg-yellow-600: Darker yellow on hover.
          - text-black: Black text for contrast.
          - font-semibold: Medium bold text.
          - py-3 px-8: Vertical and horizontal padding.
          - rounded-lg: Rounded corners.
          - shadow-lg: Large shadow for depth.
          - transition duration-300 ease-in-out: Smooth transition for hover effects.
          - transform hover:scale-105: Makes the button slightly bigger on hover.
        */}
      </div>
    </section>
  );
};

export default HeroSection;
