import { Link } from "react-router-dom";
import image from "../assets/Snow.svg";
import { FaArrowCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <section
      className="relative mb-4 mx-auto bg-cover bg-center bg-no-repeat py-20 px-10 text-white"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="grid grid-cols-4 mx-auto items-center justify-center gap-5 px-4 text-[#13221b]">
        <div className="col-span-2">
          <h2 className="text-4xl font-bold mb-4 ">About Winter Donation</h2>
          <p className="text-lg mb-2">
            Winter Donation is a platform dedicated to helping those in need
            during the cold season. Our mission is to connect donors with
            volunteers to deliver warmth and hope to people across Bangladesh.
          </p>
          <Link
            to={"/"}
            className="flex items-center gap-2 max-w-48 bg-[#13221b] hover:bg-green-900 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 "
          >
            Explore More <FaArrowCircleRight />
          </Link>
        </div>
        <div className="col-span-2 mx-auto">
          <img
            src="/src/assets/pic2.jpg"
            className="rounded-2xl md:max-w-3/4"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
