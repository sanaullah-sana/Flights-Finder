import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import FlightCard from "./components/FlightCard";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

const TOKEN = "1cxlh6veMpmNEFfYqIrcAO7RWZ2G";

const App = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [flights, setFlights] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5); // Show first 5 cards

  const fetchLocations = async (query, type) => {
    if (!query) return;
    try {
      const response = await axios.get(
        "https://test.api.amadeus.com/v1/reference-data/locations",
        {
          params: { subType: "CITY,AIRPORT", keyword: query },
          headers: { Authorization: `Bearer ${TOKEN}` },
        }
      );
      if (type === "origin") setOriginSuggestions(response.data.data || []);
      else setDestinationSuggestions(response.data.data || []);
    } catch (error) {
      console.error("Location Error:", error);
    }
  };

  const searchFlights = async () => {
    if (!origin || !destination) return;
    try {
      const response = await axios.get(
        "https://test.api.amadeus.com/v2/shopping/flight-offers",
        {
          params: {
            originLocationCode: origin.split("(")[1]?.replace(")", ""),
            destinationLocationCode: destination.split("(")[1]?.replace(")", ""),
            departureDate: "2025-08-20",
            adults: 1,
          },
          headers: { Authorization: `Bearer ${TOKEN}` },
        }
      );
      setFlights(response.data.data || []);
      setVisibleCount(5); // Reset visible cards to first 5
    } catch (error) {
      console.error("Flight Search Error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-inter">
      {/* Main content wrapper */}
      <div className="flex-grow flex flex-col items-center p-4 sm:p-8">
        <Header />
        <SearchForm
          origin={origin}
          destination={destination}
          originSuggestions={originSuggestions}
          destinationSuggestions={destinationSuggestions}
          isRoundTrip={isRoundTrip}
          setIsRoundTrip={setIsRoundTrip}
          setOrigin={setOrigin}
          setDestination={setDestination}
          setOriginSuggestions={setOriginSuggestions}
          setDestinationSuggestions={setDestinationSuggestions}
          fetchLocations={fetchLocations}
          searchFlights={searchFlights}
        />
        <div className="w-full max-w-4xl">
          {flights.length > 0 ? (
            <>
              {flights.slice(0, visibleCount).map((flight, index) => (
                <FlightCard key={index} flight={flight} index={index} />
              ))}
              {visibleCount < flights.length && (
                <div className="text-center mt-4">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 5)}
                    className="cursor-pointer px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                  >
                    Show More
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-600">No flights found yet.</p>
          )}
        </div>
      </div>

      {/* FAQs Section */}
      <FAQ />

      {/* Footer fixed at bottom */}
      <Footer />
    </div>
  );
};

export default App;
