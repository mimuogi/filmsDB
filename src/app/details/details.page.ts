import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../api/service/movies.service";
import { Movie } from "../api/models/Movie";
import { DetailedMovie } from "../api/models/DetailedMovie";
import { ActivatedRoute } from "@angular/router";
import { ApiDetailMovie } from "../api/models/ApiResults";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"],
})
export class DetailsPage implements OnInit {
  detailedMovie: DetailedMovie = new DetailedMovie();

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.movieService.getMovieDetails(id).subscribe(
      (data: ApiDetailMovie) => {
        this.detailedMovie.title = data.title;
        this.detailedMovie.date = data.release_date;
        this.detailedMovie.overview = data.overview;
        this.detailedMovie.image =
          "https://image.tmdb.org/t/p/w300/" + data.poster_path;
        this.detailedMovie.average_mark = data.vote_average;
        this.detailedMovie.genres = data.genres;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
