import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { moviesFeature } from "./movies.reducer";

@NgModule({
  imports: [StoreModule.forFeature(moviesFeature)],
})
export class MoviesModule {}
