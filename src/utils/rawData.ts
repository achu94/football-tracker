import { CountryProps as Country } from "../stores/countryStore";
import { LeagueProps as League } from "../stores/leaguesStore";

export async function getCountriesAsObj(): Promise<Country[]> {
  try {
    const response = await fetch("/rawdata/countries.json");
    const jsonData = await response.json();

    // Assuming that the JSON file contains an array of country objects
    return jsonData as Country[];
  } catch (error) {
    console.error("Error fetching or parsing countries data:", error);
    return [];
  }
}
