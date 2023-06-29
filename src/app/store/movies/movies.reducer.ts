import { createFeature, createReducer, on } from "@ngrx/store";
import { type FavouriteMovies } from "./types";
import { addToFavourites, deleteFromFavourites } from "./movies.actions";

export const initialState: FavouriteMovies = [];

export const moviesFeature = createFeature({
  name: "movies",
  reducer: createReducer(
    initialState,
    on(
      addToFavourites,
      (currentState, { payload }): FavouriteMovies => [...currentState, payload]
    ),
    on(
      deleteFromFavourites,
      (currentState, { payload }): FavouriteMovies =>
        currentState.filter((movie) => movie.imdbID !== payload)
    )
  ),
});

export const {
  reducer,
  selectMoviesState,
  name: moviesFeatureKey,
} = moviesFeature;
