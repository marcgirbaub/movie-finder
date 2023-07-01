import { Component, Input } from "@angular/core";
import { type FavMovie } from "../../store/movies/types";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent {
  @Input() movie: FavMovie;
}
