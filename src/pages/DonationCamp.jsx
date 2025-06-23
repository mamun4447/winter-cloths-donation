import { Link, useLoaderData } from "react-router-dom";
import DonationCard from "../components/DonationCard";

const DonationCamp = () => {
  const campaigns = useLoaderData();
  //   console.log(campaigns);
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#13221b] mb-12">
        Ongoing Donation Campaigns
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {campaigns?.map((campaign) => (
          <DonationCard key={campaign?.id} campaign={campaign} />
        ))}
      </div>
    </section>
  );
};

export default DonationCamp;
