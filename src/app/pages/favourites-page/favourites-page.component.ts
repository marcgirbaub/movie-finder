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

  filterMovies(types: FormControl): void {
    const selectedTypes = types.value as string[];
    this.filteredMessage = "";
    this.filteredMovies = [];

    const filteredMovies = this.favouriteMovies.filter((movie) =>
      selectedTypes.includes(movie.type)
    );

    if (filteredMovies.length === 0) {
      this.filteredMessage = "No movies found with these parameters";

      return;
    }

    this.filteredMovies = filteredMovies;
  }
}
