interface Country {
  country_id: string;
  country_name: string;
  country_logo: string;
}

const getCountriesAsObj = async (): Promise<Country[]> => {
  try {
    const response = await fetch("../rawdata/countries.json");
    const jsonData = await response.json();
    
    // Assuming that the JSON file contains an array of country objects
    return jsonData as Country[];
  } catch (error) {
    console.error("Error fetching or parsing countries data:", error);
    return [];
  }
};

export default getCountriesAsObj;
