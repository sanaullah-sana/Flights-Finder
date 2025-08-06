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
  setOriginSuggestions,          // ✅ Added
  setDestinationSuggestions,     // ✅ Added
  fetchLocations,
  searchFlights
}) => (
  <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl w-full max-w-4xl mb-10">
    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
      {/* Origin */}
      <div className="relative">
        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
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
          className="w-full px-4 py-3 border border-gray-300 rounded-xl"
        />
        {originSuggestions.length > 0 && (
          <ul className="absolute bg-white border rounded-xl shadow-lg mt-1 max-h-40 overflow-auto w-full z-10">
            {originSuggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setOrigin(`${item.name} (${item.iataCode})`);
                  setOriginSuggestions([]); // ✅ Hide after selection
                }}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {item.name} ({item.iataCode})
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Destination */}
      <div className="relative">
        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
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
          className="w-full px-4 py-3 border border-gray-300 rounded-xl"
        />
        {destinationSuggestions.length > 0 && (
          <ul className="absolute bg-white border rounded-xl shadow-lg mt-1 max-h-40 overflow-auto w-full z-10">
            {destinationSuggestions.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setDestination(`${item.name} (${item.iataCode})`);
                  setDestinationSuggestions([]); // ✅ Hide after selection
                }}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              >
                {item.name} ({item.iataCode})
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Departure Date */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2 flex items-center">
          <LuCalendarDays className="mr-2 text-blue-500" /> Departure Date
        </label>
        <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
      </div>

      {/* Return Date */}
      {isRoundTrip && (
        <div>
          <label className="block text-gray-700 font-semibold mb-2 flex items-center">
            <LuCalendarDays className="mr-2 text-blue-500" /> Return Date
          </label>
          <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
        </div>
      )}

      {/* Button */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col sm:flex-row items-center justify-between mt-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <input
            type="checkbox"
            checked={isRoundTrip}
            onChange={(e) => setIsRoundTrip(e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
          <label className="ml-2 text-gray-700 font-medium">Round Trip</label>
        </div>
        <button
          type="button"
          onClick={searchFlights}
          className="cursor-pointer w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 flex items-center justify-center"
        >
          <FaSearch className="mr-2" />
          Search Flights
        </button>
      </div>
    </form>
  </div>
);

export default SearchForm;
