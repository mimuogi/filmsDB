import { Component } from "@angular/core";
import { MoviesService } from "../api/service/movies.service";
import { Movie } from "../api/models/Movie";
import { ApiResults } from "../api/models/ApiResults";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  availableMovies: Movie[] = [];
  movieTitle: string;
  constructor(private MService: MoviesService) {}

  getMovies() {
    if (this.movieTitle.length > 0) {
      this.MService.getMovies(this.movieTitle).subscribe(
        (movies: ApiResults) => {
          this.availableMovies = movies.results.map((movie) => {
            return new Movie(movie.id, movie.title);
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
