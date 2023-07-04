import { Component, Inject } from "@angular/core";
import { type Observable } from "rxjs";
import { MoviesService } from "../../services/movies/movies.service";
import { type ParsedMoviesApiResponse } from "../../../types/types";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
  searchValue: string;
  movies$: Observable<ParsedMoviesApiResponse>;
  isLoading = false;
  error: string;
  movies: ParsedMoviesApiResponse = {
    totalResults: "",
    response: "",
    search: [],
  };

  constructor(
    @Inject(MoviesService) private readonly moviesService: MoviesService
  ) {}

  searchMovies(title: string): void {
    this.isLoading = true;
    this.error = "";
    this.movies$ = this.moviesService.searchMovies(title);

    this.movies$.subscribe({
      next: (data) => {
        this.movies = data;
        this.isLoading = false;
        if (data.error) {
          this.error = data.error;
        }
      },
      error: () => {
        this.movies = { totalResults: "", response: "", search: [] };
        this.isLoading = false;
        this.error = "There was an error with your search. Please try again!";
      },
    });
  }

  clearSearch(): void {
    this.searchValue = "";
    this.error = "";
    this.movies = {
      totalResults: "",
      response: "",
      search: [],
    };
  }
}
