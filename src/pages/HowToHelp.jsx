const HowToHelp = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#13221b] mb-4">
          How You Can Help
        </h1>
        <p className="text-base-content text-lg mb-8">
          Every piece of clothing you donate can bring warmth and hope to
          someone in need. Here's how you can make a difference this winter:
        </p>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          {/* Step 1 */}
          <div className="card bg-base-100 shadow-md p-4">
            <h2 className="text-xl font-semibold text-[#13221b] mb-2">
              1. Login / Register
            </h2>
            <p>
              Sign in with your email or Google account to access the donation
              portal.
            </p>
          </div>

          {/* Step 2 */}
          <div className="card bg-base-100 shadow-md p-4">
            <h2 className="text-xl font-semibold text-[#13221b] mb-2">
              2. Choose a Campaign
            </h2>
            <p>
              Browse active donation campaigns in different divisions and find
              one you'd like to support.
            </p>
          </div>

          {/* Step 3 */}
          <div className="card bg-base-100 shadow-md p-4">
            <h2 className="text-xl font-semibold text-[#13221b] mb-2">
              3. Fill Out Donation Form
            </h2>
            <p>
              Submit details of the items you're donating (e.g., jackets,
              blankets), along with your pickup location.
            </p>
          </div>

          {/* Step 4 */}
          <div className="card bg-base-100 shadow-md p-4">
            <h2 className="text-xl font-semibold text-[#13221b] mb-2">
              4. Volunteers Will Reach Out
            </h2>
            <p>
              Our volunteers will contact you and arrange a pickup based on your
              location and schedule.
            </p>
          </div>

          {/* Step 5 */}
          <div className="card bg-base-100 shadow-md p-4">
            <h2 className="text-xl font-semibold text-[#13221b] mb-2">
              5. Share & Spread
            </h2>
            <p>
              Encourage others to donate! Share the campaign link with friends,
              family, and on social media.
            </p>
          </div>

          {/* Step 6 */}
          <div className="card bg-base-100 shadow-md p-4">
            <h2 className="text-xl font-semibold text-[#13221b] mb-2">
              6. Keep Supporting
            </h2>
            <p>
              Come back any time to donate more warm clothes or volunteer in
              your area.
            </p>
          </div>
        </div>

        <p className="mt-12 text-lg">
          💙 Together, we can make winter warmer for everyone in Bangladesh.
        </p>
      </div>
    </div>
  );
};

export default HowToHelp;
