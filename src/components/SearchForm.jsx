import React from "react";
import { FaSearch } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
import { LuCalendarDays } from "react-icons/lu";

const SearchForm = ({
  origin,
  destination,
  originSuggestions,
  destinationSuggestions,
  isRoundTrip,
  setIsRoundTrip,
  setOrigin,
  setDestination,
  setOriginSuggestions,
  setDestinationSuggestions,
  fetchLocations,
  searchFlights
}) => (
  <div className="bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-6 lg:py-6 rounded-2xl shadow-xl w-full max-w-4xl mx-auto mb-10">
    <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-end">
      {/* Origin */}
      <div className="relative">
        <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2 flex items-center">
          <GiAirplaneDeparture className="mr-2 text-blue-500" /> Origin
        </label>
        <input
          type="text"
          value={origin}
          onChange={(e) => {
            setOrigin(e.target.value);
            fetchLocations(e.target.value, "origin");
          }}
          placeholder="e.g., London"
          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl text-sm sm:text-base"
        />
        {originSuggestions.length > 0 && (
          <ul className="absolute bg-white border rounded-xl shadow-lg mt-1 max-h-40 overflow-auto w-full z-10">
            {originSuggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setOrigin(`${item.name} (${item.iataCode})`);
                  setOriginSuggestions([]);
                }}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
              >
                {item.name} ({item.iataCode})
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Destination */}
      <div className="relative">
        <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2 flex items-center">
          <GiAirplaneDeparture className="mr-2 text-blue-500 transform rotate-180" /> Destination
        </label>
        <input
          type="text"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            fetchLocations(e.target.value, "destination");
          }}
          placeholder="e.g., New York"
          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl text-sm sm:text-base"
        />
        {destinationSuggestions.length > 0 && (
          <ul className="absolute bg-white border rounded-xl shadow-lg mt-1 max-h-40 overflow-auto w-full z-10">
            {destinationSuggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setDestination(`${item.name} (${item.iataCode})`);
                  setDestinationSuggestions([]);
                }}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
              >
                {item.name} ({item.iataCode})
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Departure Date */}
      <div>
        <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2 flex items-center">
          <LuCalendarDays className="mr-2 text-blue-500" /> Departure Date
        </label>
        <input
          type="date"
          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl text-sm sm:text-base"
        />
      </div>

      {/* Return Date */}
      {isRoundTrip && (
        <div>
          <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2 flex items-center">
            <LuCalendarDays className="mr-2 text-blue-500" /> Return Date
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl text-sm sm:text-base"
          />
        </div>
      )}

      {/* Button & Round Trip */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isRoundTrip}
            onChange={(e) => setIsRoundTrip(e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="ml-2 text-gray-700 font-medium text-sm sm:text-base">Round Trip</label>
        </div>
        <button
          type="button"
          onClick={searchFlights}
          className="cursor-pointer w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3 bg-blue-600 text-white font-bold rounded-lg sm:rounded-xl shadow hover:bg-blue-700 flex items-center justify-center text-sm sm:text-base"
        >
          <FaSearch className="mr-2" />
          Search Flights
        </button>
      </div>
    </form>
  </div>
);

export default SearchForm;
