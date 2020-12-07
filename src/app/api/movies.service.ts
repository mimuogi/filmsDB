import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export interface Movie {

  id: string;
  title: string;
  originalTitle: string;
  originalLang: string;
  date: string;
  overwiew: string;
  image: string;
  vote_average: number;
  generes: string[];
  adult: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  urlAPI: string = 'https://api.themoviedb.org/3/';
  keyAPI: string = 'ffc6abe061a4953dca1761b566aa88c8'

  constructor(private http: HttpClient) { }

  getMovies(movieTitle:string) {
    return this.http.get(this.urlAPI + 'search/movie?api_key=' + this.keyAPI + '&query=' + movieTitle);
  }
}
