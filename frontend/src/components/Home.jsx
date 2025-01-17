import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [countries, setCountries] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchCountries = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BASE_BACKEND_URL);
      const data = await response.json();
      setCountries(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <main className="contenedor">
      <h1 className="text-center text-5xl mt-5">Available Countries</h1>
      <div className="text-center mt-8">
        {loading ? (
          <p className="text-lg text-gray-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {countries.map((country) => (
              <Link
                key={country.countryCode}
                to={`/country/${country.countryCode}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              >
                {country.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
