import { MatchProps as Match } from "../stores/matchStore";

const apiKey = "3a57ed6c10053e8853de2c281a8c168cd2e71decd4c797b5db13a5918731e7c4";
const urlRoot = "https://apiv3.apifootball.com/";

export async function getMatches(from?: string, to?: string, league_id: number = 175): Promise<Match[]> {
  
  try {
    const response = await fetch("/rawdata/events.json");
    const matches = await response.json();
    
    // const liveMatches = matches.filter( (match: Match) => parseInt(match.match_live));
    
    return matches;
    
  } catch (error) {
    console.error("Error fetching or parsing leagues data:", error);
    return [];
  }
  
  // Date is optional, if not provided use current date
  const fromDate = from ? from : formatDate(new Date());
  const toDate = to ? to : fromDate;
  
  
  

  const action = "get_events";

  const apiUrl =`${urlRoot}?action=${action}&from=${fromDate}&to=${toDate}&league_id=${league_id}&APIkey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const matches = await response.json();
    
    const liveMatches = matches.filter( (match: Match) => parseInt(match.match_live));
    
    console.log(matches);
    console.log(liveMatches);
    
    
    return matches;

  } catch (error) {
    console.error('Error during fetch:', error);

    return [];
  }
}

// Helper function to format Date objects as "YYYY-MM-DD"
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}