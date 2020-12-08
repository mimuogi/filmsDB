import { ApiCountryResult } from "./ApiResults";

export class DetailedMovie {
  id: string;
  title: string;
  originalTitle: string;
  originalLanguage: string;
  director: string;
  countries: ApiCountryResult[];
  date: string;
  overview: string;
  image: string;
  average_rate: number;
  genres: [];
  explicit: boolean;
  tagline: string;
}
