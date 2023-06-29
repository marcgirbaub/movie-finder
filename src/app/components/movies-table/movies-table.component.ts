import { Component, Input } from "@angular/core";
import { type Movies } from "src/types/types";

@Component({
  selector: "app-movies-table",
  templateUrl: "./movies-table.component.html",
  styleUrls: ["./movies-table.component.scss"],
})
export class MoviesTableComponent {
  @Input() movies: Movies;
  displayedColumns: string[] = ["poster", "title", "year", "type"];
}
