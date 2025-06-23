import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const DonationDetails = () => {
  const [campaign, setCampaign] = useState({});
  const location = useLocation();
  const List = location.pathname.split("/");

  const Id = parseInt(List[2]);

  const [formData, setFormData] = useState({
    quantity: "",
    type: "",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show thank you toast
    toast.success("Thank you! We will reach your destination soon.");

    // Reset form
    setFormData({
      quantity: "",
      type: "",
      location: "",
      notes: "",
    });

    // Optionally navigate or stay on page
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((campaigns) =>
        setCampaign(campaigns.find((campaign) => campaign?.id === Id))
      );
  }, [Id]);

  //   console.log(campaign);
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-[#13221b]">
      {/* Campaign Info */}
      <div className="mb-10">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full max-h-[300px] object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-2 text-[#13221b]">
          {campaign.title}
        </h1>
        <p className="text-sm text-gray-500 mb-1">📍 {campaign.division}</p>
        <p className="text-sm text-gray-500 mb-4">📞 {campaign.contactInfo}</p>
        <p>{campaign.description}</p>
      </div>

      {/* Donation Form */}
      <div className="bg-base-200 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Donate to this Campaign</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Quantity of items</span>
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g., 3"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Item Type</span>
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="select select-bordered  w-full"
            >
              <option value="">Select type</option>
              <option value="blanket">Blanket</option>
              <option value="jacket">Jacket</option>
              <option value="sweater">Sweater</option>
              <option value="scarf">Scarf</option>
            </select>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Pickup Location</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
              required
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Additional Notes (optional)</span>
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              placeholder="Any special instructions..."
            />
          </div>

          <button className="btn btn-md bg-[#13221b] text-white hover:bg-green-900 mt-4">
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationDetails;
