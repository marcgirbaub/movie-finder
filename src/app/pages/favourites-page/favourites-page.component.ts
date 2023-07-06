import { Component, Inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { type Observable } from "rxjs";
import { MoviesService } from "../../services/movies/movies.service";
import { type FavouriteMovies } from "../../store/movies/types";

@Component({
  selector: "app-favourites-page",
  templateUrl: "./favourites-page.component.html",
  styleUrls: ["./favourites-page.component.scss"],
})
export class FavouritesPageComponent {
  favouriteMovies: FavouriteMovies = [];
  favouriteMovies$: Observable<FavouriteMovies>;
  filteredMovies: FavouriteMovies = [];
  filteredMessage = "";
  types = new FormControl("");
  typesList: string[] = ["movie", "game", "series"];
  year: number;

  constructor(
    @Inject(MoviesService) private readonly moviesService: MoviesService,
    @Inject(Store) private readonly store: Store
  ) {}

  ngOnInit() {
    this.getFavouritesMovies();
    this.favouriteMovies$ = this.moviesService.getFavouriteMoviesState();
  }

  getFavouritesMovies(): void {
    const movies = this.moviesService.getFavouriteMoviesState();

    movies.subscribe((data) => {
      this.favouriteMovies = data;
    });
  }

  filterMovies(types?: FormControl, year?: number): void {
    const selectedTypes = types?.value as string[];
    this.filteredMessage = "";
    this.filteredMovies = [];
    let filteredMovies: FavouriteMovies = [];

    if (types?.value.length > 0 && year) {
      filteredMovies = this.favouriteMovies.filter(
        (movie) =>
          selectedTypes.includes(movie.type) && movie.year === year.toString()
      );
    }

    if (!year) {
      filteredMovies = this.favouriteMovies.filter((movie) =>
        selectedTypes.includes(movie.type)
      );
    }

    if (year && types?.value.length === 0) {
      filteredMovies = this.favouriteMovies.filter(
        (movie) => movie.year === year?.toString()
      );
    }

    if (filteredMovies.length === 0) {
      this.filteredMessage = "No movies found with these parameters";

      return;
    }

    this.filteredMovies = filteredMovies;
  }

  deleteFromFavourites(id: string): void {
    this.moviesService.deleteFromFavourites(id);

    if (this.year || this.types.value) {
      this.filterMovies(this.types, this.year);
    }
  }

  resetFilters(): void {
    this.filteredMessage = "";
    this.filteredMovies = [];
    this.types = new FormControl("");
    this.year = Number("");
  }
}
