import React from 'react';


function BannerResumePane() {
  return (
    <div className="bg-white p-4 rounded-lg py-[1.37rem] px-[2.1rem] min-h-[13.5rem]">
      <p className="text-center text-gray-700 font-semibold">
        In your zips over the last 18 months, we’ve originated:
      </p>
      <div className="flex justify-around items-center mt-4">
        <div className="text-center">
          <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
            <img src="Icon-48 place holder.svg" alt="Icon description" className="size-3" />
          </div>
          <p className="text-3xl font-bold text-gray-900">$20M</p>
          <p className="text-gray-600">in sales</p>
        </div>
        <div className="w-px bg-gray-300 h-16 mx-4"></div>
        <div className="text-center">
          <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
            <span className="text-white text-xl">📊</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">$500K</p>
          <p className="text-gray-600">in Commissions (est)</p>
        </div>
      </div>
    </div>
  );
}
export default BannerResumePane;

