import { Link } from "react-router-dom";

const DonationCard = ({ campaign }) => {
  return (
    <div className="bg-base-100 text-[#13221b] rounded-xl overflow-hidden shadow-sm border border-gray-300 hover:shadow-lg transition duration-300">
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col justify-between h-[250px]">
        <div>
          <h2 className="text-xl font-semibold">{campaign.title}</h2>
          <p className="text-sm mb-2">📍 {campaign.division}</p>
          <p className=" text-sm line-clamp-3">{campaign.description}</p>
        </div>

        <div className="mt-4 mx-auto">
          <Link
            to={`/campaigns/${campaign.id}`}
            className="btn btn-md hover:bg-green-900 bg-[#13221b] text-white  w-full"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
