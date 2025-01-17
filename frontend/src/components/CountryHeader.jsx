import React from "react";

const CountryHeader = ({ name, flag }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <h1 className="text-4xl font-bold mr-4">{name}</h1>
      {flag ? (
        <img src={flag} alt={`${name} Flag`} className="w-16 h-10" />
      ) : (
        <p className="text-lg text-gray-500">No flag available</p>
      )}
    </div>
  );
};

export default CountryHeader;
