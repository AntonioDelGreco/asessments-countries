const allCountries = async (req, res) => {
  try {
    let response = await fetch(
      `${process.env.URL_BASE_COUNTRIES}/AvailableCountries`
    );
    const data = await response.json();
    if (!data) {
      return res.status(500).send("Error from getting data.");
    }
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error processing request.");
  }
};

const getInfoCountries = async (req, res) => {
  const countryCode = req.params.pid;
  if (!countryCode) {
    return res.status(500).send("Error getting country code.");
  }

  try {
    // info about borders of each country
    const dataBorders = await getInfoBorders(countryCode);
    if (!dataBorders) {
      return res.status(500).send("Error from getting data.");
    }

    // info about population of each country
    const population = await getPopulationOfOneCountry(dataBorders.commonName);

    // info about flags countries
    const flag = await getFlagOfOneCountry(dataBorders.commonName);

    const newDataCountry = {
      name: dataBorders.commonName,
      borders: dataBorders.borders,
      population: population || null,
      flag: flag || null,
    };

    return res.status(200).send(newDataCountry);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error processing request.");
  }
};

const getInfoBorders = async (countryCode) => {
  let response = await fetch(
    `${process.env.URL_BASE_COUNTRIES}/CountryInfo/${countryCode}`
  );
  const data = await response.json();
  return data;
};

const getPopulationOfOneCountry = async (countryName) => {
  let response = await fetch(
    `${process.env.URL_BASE_FLAGS_POPULATION}/population`
  );
  const data = await response.json();
  const population = data.data.find(
    (country) => country.country === countryName
  );
  return population;
};

const getFlagOfOneCountry = async (countryName) => {
  let response = await fetch(
    `${process.env.URL_BASE_FLAGS_POPULATION}/flag/images`
  );
  const data = await response.json();
  const flag = data.data.find((country) => country.name === countryName);
  return flag;
};

export { allCountries, getInfoCountries };
