import React from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaChair } from "react-icons/fa";

const FlightCard = ({ flight, index }) => (
  <div className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-2xl p-6 mb-5 border border-blue-200 hover:shadow-xl transition-all duration-300">
    <h3 className="text-xl font-bold text-blue-700 mb-4">
      ✈️ Flight Offer #{index + 1}
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Price Section */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <p className="text-gray-500 text-sm">Price</p>
        <p className="text-2xl font-bold text-green-600">
          {flight.price.total} {flight.price.currency}
        </p>
      </div>

      {/* Seats Section */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Bookable Seats</p>
          <p className="text-lg font-semibold">{flight.numberOfBookableSeats}</p>
        </div>
        <FaChair className="text-blue-600 text-2xl" />
      </div>
    </div>

    {/* One Way / Return Info */}
    <div className="mt-4 flex items-center justify-between bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md">
      <span className="flex items-center space-x-2">
        <FaPlaneDeparture />
        <p className="font-medium">
          {flight.oneWay ? "One Way Flight" : "Round Trip"}
        </p>
      </span>
      <FaPlaneArrival className="text-xl" />
    </div>
  </div>
);

export default FlightCard;
