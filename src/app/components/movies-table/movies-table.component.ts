import { Component, Inject, Input } from "@angular/core";
import { MoviesService } from "../../services/movies/movies.service";
import { type Movie, type Movies } from "../../../types/types";
import { type FavouriteMovies } from "src/app/store/movies/types";

@Component({
  selector: "app-movies-table",
  templateUrl: "./movies-table.component.html",
  styleUrls: ["./movies-table.component.scss"],
})
export class MoviesTableComponent {
  @Input() movies: Movies;
  @Input() isLoading: boolean;
  favouriteMovies: FavouriteMovies;
  displayedColumns: string[] = ["poster", "title", "year", "type", "fav"];

  constructor(
    @Inject(MoviesService) private readonly moviesService: MoviesService
  ) {}

  addToFavourites(movie: Movie): void {
    this.moviesService.addToFavourites(movie);
  }

  getFavouriteMovies() {
    this.moviesService.getFavouriteMoviesState().subscribe((data) => {
      this.favouriteMovies = data;
    });
  }

  checkIfMovieIsFavourite(movieToCheck: Movie): boolean {
    this.getFavouriteMovies();
    return this.favouriteMovies.some(
      (movie) => movie.imdbID === movieToCheck.imdbID
    );
  }

  deleteFromFavourites(id: string): void {
    this.moviesService.deleteFromFavourites(id);
  }
}
