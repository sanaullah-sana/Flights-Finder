import React from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaChair } from "react-icons/fa";

const FlightCard = ({ flight, index }) => (
  <div className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-md rounded-xl p-3 sm:p-4 border border-blue-200 hover:shadow-lg transition-all duration-300 w-full max-w-2xl mx-auto">
    <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-700 mb-2">
      ✈️ Flight Offer #{index + 1}
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
      {/* Price Section */}
      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border border-gray-100">
        <p className="text-gray-500 text-xs sm:text-sm">Price</p>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
          {flight.price.total} {flight.price.currency}
        </p>
      </div>

      {/* Seats Section */}
      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-xs sm:text-sm">Bookable Seats</p>
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            {flight.numberOfBookableSeats}
          </p>
        </div>
        <FaChair className="text-blue-600 text-lg sm:text-xl" />
      </div>
    </div>

    {/* One Way / Return Info */}
    <div className="mt-3 flex items-center justify-between bg-blue-600 text-white px-3 py-1.5 sm:py-2 rounded-lg shadow text-xs sm:text-sm md:text-base">
      <span className="flex items-center gap-2">
        <FaPlaneDeparture />
        <p className="font-medium">
          {flight.oneWay ? "One Way Flight" : "Round Trip"}
        </p>
      </span>
      <FaPlaneArrival className="text-base sm:text-lg" />
    </div>
  </div>
);

export default FlightCard;
