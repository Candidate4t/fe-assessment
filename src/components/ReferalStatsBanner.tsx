import React from 'react';
import PrimaryButton from './PrimaryButton';

function ReferralStatsBanner() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col lg:flex-row">
      <div className="flex-1 mb-6 lg:mb-0 lg:mr-6">
        <h2 className="text-base font-semibold">
          Our referrals are routed to the top-performing agents in our network. Rankings are based on numerous factors, including:
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
        <div className="flex items-center">
          <h2 className="text-xl font-bold flex-1">
            Your average rank in the markets you serve is:
          </h2>
          <div className="flex items-center">
            <p className="text-4xl font-bold text-red-600">25</p>
            <img src="md-arrow-round-down.svg" alt="Icon description" className="ml-2" />
          </div>
        </div>
        <PrimaryButton text="Learn more" onClick={() => { }} />
        <p className="text-sm font-medium mt-4">
          Your ranking will directly affect the number of referrals you receive. Learn about our <span className="text-red-600">Guaranteed Display</span> program to help improve your ranking.
        </p>
      </div>
    </div>
  )
}
export default ReferralStatsBanner;

