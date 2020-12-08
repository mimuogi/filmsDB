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
  country: string;
  release_date: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  genres: [];
  adult: boolean;
}
