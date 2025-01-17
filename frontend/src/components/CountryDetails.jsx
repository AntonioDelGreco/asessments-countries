import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CountryHeader from "./CountryHeader";
import BorderCountries from "./BorderCountries";
import PopulationChart from "./PopulationChart";

const CountryDetails = () => {
  const { countryCode } = useParams();
  const [countryDetail, setCountryDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchCountryDetails = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_BACKEND_URL}/info/${countryCode}`
      );
      const data = await response.json();
      setCountryDetail(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching country details:", error);
    }
  };

  useEffect(() => {
    fetchCountryDetails();
  }, [countryCode]);

  return (
    <div className="text-center mt-10">
      <h2 className="text-center text-5xl mt-5">Country Details</h2>
      {loading ? (
        <p className="text-lg text-gray-500">Loading...</p>
      ) : (
        <div className="mt-8">
          <CountryHeader
            name={countryDetail.name}
            flag={countryDetail.flag?.flag}
          />
          <BorderCountries borders={countryDetail.borders} />
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">
              Population Over Time
            </h3>
            <PopulationChart
              populationData={countryDetail.population?.populationCounts}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
