import { Component, Inject, Input } from "@angular/core";
import { type FavMovie } from "../../store/movies/types";
import { MoviesService } from "../../services/movies/movies.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent {
  @Input() movie: FavMovie;

  constructor(
    @Inject(MoviesService) private readonly moviesService: MoviesService
  ) {}

  deleteFromFavourites(): void {
    this.moviesService.deleteFromFavourites(this.movie.imdbID);
  }
}
