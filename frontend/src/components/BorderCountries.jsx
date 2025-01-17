import React from "react";
import { Link } from "react-router-dom";

const BorderCountries = ({ borders }) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold">Border Countries</h3>
      <ul className="flex flex-wrap justify-center mt-4 gap-4">
        {borders && borders.length > 0 ? (
          borders.map((border, index) => (
            <li key={index}>
              <Link
                to={`/country/${border.countryCode}`}
                className="text-blue-600 hover:underline"
              >
                {border.commonName}
              </Link>
            </li>
          ))
        ) : (
          <p>No bordering countries found.</p>
        )}
      </ul>
    </div>
  );
};

export default BorderCountries;
