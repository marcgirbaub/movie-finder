import { Component, Inject, Input } from "@angular/core";
import { MoviesService } from "../../services/movies/movies.service";
import { type Movie, type Movies } from "../../../types/types";
import { type FavMovie } from "../../store/movies/types";

@Component({
  selector: "app-movies-table",
  templateUrl: "./movies-table.component.html",
  styleUrls: ["./movies-table.component.scss"],
})
export class MoviesTableComponent {
  @Input() movies: Movies;
  @Input() isLoading: boolean;
  displayedColumns: string[] = ["poster", "title", "year", "type", "fav"];

  constructor(
    @Inject(MoviesService) private readonly moviesService: MoviesService
  ) {}

  addToFavourites(movie: Movie): void {
    const movieToAdd: FavMovie = {
      title: movie.title,
      year: movie.year,
      poster: movie.poster,
      type: movie.type,
    };

    this.moviesService.addToFavourites(movieToAdd);
  }
}
