import { Component, Inject } from "@angular/core";
import { MoviesService } from "./services/movies/movies.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "movie-finder";
}
