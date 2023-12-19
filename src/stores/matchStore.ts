import { StateCreator } from "zustand";

import { getMatches } from "../utils/API";

interface Coach {
  lineup_player: string;
  lineup_number: string;
  lineup_position: string;
  player_key: string;
}

interface Lineup {
  starting_lineups: unknown[]; // You might want to define a more specific type for starting_lineups
  substitutes: unknown[]; // You might want to define a more specific type for substitutes
  coach: Coach[];
  missing_players: unknown[]; // You might want to define a more specific type for missing_players
}

interface Substitutions {
  home: unknown[]; // You might want to define a more specific type for home substitutions
  away: unknown[]; // You might want to define a more specific type for away substitutions
}

interface Statistics {
  // You might want to define the specific properties for Statistics
}

export interface MatchProps {
  match_id: string;
  country_id: string;
  country_name: string;
  league_id: string;
  league_name: string;
  match_date: string;
  match_status: string;
  match_time: string;
  match_hometeam_id: string;
  match_hometeam_name: string;
  match_hometeam_score: string;
  match_awayteam_name: string;
  match_awayteam_id: string;
  match_awayteam_score: string;
  match_hometeam_halftime_score: string;
  match_awayteam_halftime_score: string;
  match_hometeam_extra_score: string;
  match_awayteam_extra_score: string;
  match_hometeam_penalty_score: string;
  match_awayteam_penalty_score: string;
  match_hometeam_ft_score: string;
  match_awayteam_ft_score: string;
  match_hometeam_system: string;
  match_awayteam_system: string;
  match_live: string;
  match_round: string;
  match_stadium: string;
  match_referee: string;
  team_home_badge: string;
  team_away_badge: string;
  league_logo: string;
  country_logo: string;
  league_year: string;
  fk_stage_key: string;
  stage_name: string;
  goalscorer: unknown[]; // You might want to define a more specific type for goalscorer
  cards: unknown[]; // You might want to define a more specific type for cards
  substitutions: Substitutions;
  lineup: {
    home: Lineup;
    away: Lineup;
  };
  statistics: Statistics[];
  statistics_1half: Statistics[];
}

export interface MatchSlice {
  matches: MatchProps[];
  liveMatches: MatchProps[];
  initMatches: () => Promise<void>;
}

export const createMatchSlice: StateCreator<MatchSlice> = (set) => ({
  matches: [],
  liveMatches: [],
  initMatches: async () => {
    try {
      const fetchedMatches = await getMatches();
      const liveMatches = fetchedMatches.filter( match => parseInt(match.match_live));

      set({ matches: fetchedMatches, liveMatches: liveMatches});

    } catch (error) {
      console.error("Error initializing matches:", error);
    }
  }
});