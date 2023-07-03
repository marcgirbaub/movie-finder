import { Component, Inject, Input } from "@angular/core";
import { type FavMovie } from "../../store/movies/types";
import { MoviesService } from "../../services/movies/movies.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent {
  @Input() movie: FavMovie;

  constructor(
    @Inject(MoviesService) private readonly moviesService: MoviesService,
    @Inject(MatDialog) public dialog: MatDialog
  ) {}

  deleteFromFavourites(): void {
    this.moviesService.deleteFromFavourites(this.movie.imdbID);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { description: this.movie.description },
    });
    dialogRef.afterClosed().subscribe((description: string) => {
      this.moviesService.modifyDescription(this.movie.imdbID, description);
    });
  }
}
