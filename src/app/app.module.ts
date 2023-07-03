import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { MoviesTableComponent } from "./components/movies-table/movies-table.component";
import { HeaderComponent } from "./components/header/header.component";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MoviesModule } from "./store/movies/movies.module";
import { MovieComponent } from "./components/movie/movie.component";
import { FavouritesPageComponent } from "./pages/favourites-page/favourites-page.component";
import { DialogComponent } from "./components/dialog/dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MoviesTableComponent,
    HeaderComponent,
    MovieComponent,
    FavouritesPageComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    MoviesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
