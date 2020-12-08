import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../api/service/movies.service";
import { DetailedMovie } from "../api/models/DetailedMovie";
import { ActivatedRoute } from "@angular/router";
import { ApiDetailMovie, ApiProductionCountry } from "../api/models/ApiResults";

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
      async (details: ApiDetailMovie) => {
        this.detailedMovie.title = details.title;
        this.detailedMovie.originalTitle = details.original_title;
        this.detailedMovie.originalLanguage = details.original_language.toUpperCase();
        this.detailedMovie.date = details.release_date;
        this.detailedMovie.overview = details.overview;
        this.detailedMovie.tagline = details.tagline;
        this.detailedMovie.image =
          "https://image.tmdb.org/t/p/w300/" + details.poster_path;
        this.detailedMovie.average_rate = details.vote_average;
        this.detailedMovie.explicit = details.adult;
        this.detailedMovie.genres = details.genres;
        const countryInfoPromises = details.production_countries.map(
          (country: ApiProductionCountry) => {
            return this.movieService.getCountryInfo(country).toPromise();
          }
        );
        this.detailedMovie.countries = await Promise.all(countryInfoPromises);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
