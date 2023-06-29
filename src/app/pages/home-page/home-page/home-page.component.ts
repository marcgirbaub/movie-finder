import { Component, Inject } from "@angular/core";
import { type Observable } from "rxjs";
import { MoviesService } from "src/app/services/movies/movies.service";
import { type ParsedMoviesApiResponse, type Movies } from "src/types/types";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
  searchValue: string;
  movies$: Observable<ParsedMoviesApiResponse>;

  constructor(
    @Inject(MoviesService) private readonly moviesService: MoviesService
  ) {}

  searchMovies(title: string): void {
    this.movies$ = this.moviesService.searchMovies(title);
  }
}
