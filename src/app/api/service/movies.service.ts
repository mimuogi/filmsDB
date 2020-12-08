import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { ApiDetailMovie, ApiResults } from "../models/ApiResults";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  URL_API: string = "https://api.themoviedb.org/3/";
  KEY_API: string = environment.API_KEY;

  constructor(private http: HttpClient) {}

  getMovies(movieTitle: string): Observable<ApiResults> {
    return this.http.get<ApiResults>(
      `${this.URL_API}search/movie?api_key=${this.KEY_API}&query=${movieTitle}`
    );
  }
  getMovieDetails(id: string): Observable<ApiDetailMovie> {
    return this.http.get<ApiDetailMovie>(
      this.URL_API + "movie/" + id + "?api_key=" + this.KEY_API
    );
  }
}
