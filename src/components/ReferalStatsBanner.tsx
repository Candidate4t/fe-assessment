import React from 'react';
import PrimaryButton from './PrimaryButton';

function ReferralStatsBanner() {
  return (
    <div className="bg-white mr-16 ml-16 p-6 rounded-lg shadow-md flex">
      <div className="flex-1">
        <h2 className="text-base font-semibold">
          Our referrals are routed to the top performing agents in our network. Rankings are based on numerous factors, including:
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-y-2 text-gray-700">
          <div className="flex items-center font-medium">
            <span className="text-red-500 mr-2">+</span> Transaction Statistics
          </div>
          <div className="flex items-center font-medium text-sm">
            <span className="text-red-500 mr-2">+</span> Customer Satisfaction
          </div>
          <div className="flex items-center font-medium text-sm">
            <span className="text-red-500 mr-2">+</span> Responsiveness
          </div>
          <div className="flex items-center font-medium text-sm">
            <span className="text-red-500 mr-2">+</span> Portal Updates
          </div>
        </div>
      </div>

      <div className="flex-1 bg-gray-100 p-4 rounded-lg">
        <div className="flex">
          <h2 className="text-xl font-bold w-1/2">
            Your average rank in the markets you serve is:
          </h2>
          <div className="w-1/5 flex">
            <p className="text-4xl flex-1 font-bold text-red-600">25</p>
            <div className="size-3 align-left flex-1">
            <img src="md-arrow-round-down.svg" alt="Icon description" className="align-bottom" />
            </div>
          </div>
          <div className="">
            <PrimaryButton text="Learn more" onClick={() => { }} />
          </div>
        </div>
        <p className="text-sm font-medium">
          Your ranking will directly affect the number of referrals you receive. Learn about our <span className="text-red-600">Guaranteed Display</span> program to help improve your ranking.
        </p>
      </div>
    </div>
  );
}

export default ReferralStatsBanner;

