export interface ApiResults {
  results: ApiMovie[];
}

export interface ApiMovie {
  id: string;
  title: string;
}

export interface ApiDetailMovie {
  id: string;
  title: string;
  original_title: string;
  original_language: string;
  production_countries: ApiProductionCountry[];
  release_date: string;
  overview: string;
  tagline: string;
  poster_path: string;
  vote_average: number;
  genres: [];
  adult: boolean;
}

export interface ApiProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ApiCountryResult {
  name: string;
  flag: string;
}
