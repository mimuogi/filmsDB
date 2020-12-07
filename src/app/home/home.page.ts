import { Component } from '@angular/core';
import { MoviesService, Movie } from '../api/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  availableMovies: any[] = [];
  movieTitle: string;
  constructor(private MService: MoviesService) {}

  getMovies(event){
    if (this.movieTitle.length > 0) {
      this.MService.getMovies(this.movieTitle)
      .subscribe(
      (movies) => {
        this.availableMovies = movies['results']
      },
      (error) => {
        console.error(error)
      }
    )
    }
  }

}
