import { NgModule } from "@angular/core";
import { RouterModule, type Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { FavouritesPageComponent } from "./pages/favourites-page/favourites-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "favourites", component: FavouritesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
