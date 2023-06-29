import { createFeature, createReducer, on } from "@ngrx/store";
import { type FavouriteMovies } from "./types";
import { addToFavourites } from "./movies.actions";

export const initialState: FavouriteMovies = [];

export const moviesFeature = createFeature({
  name: "movies",
  reducer: createReducer(
    initialState,
    on(
      addToFavourites,
      (currentState, { payload }): FavouriteMovies => [...currentState, payload]
    )
  ),
});

export const {
  reducer,
  selectMoviesState,
  name: moviesFeatureKey,
} = moviesFeature;
