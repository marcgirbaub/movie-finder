import { createFeature, createReducer, on } from "@ngrx/store";
import { type FavouriteMovies } from "./types";

export const initialState: FavouriteMovies = [];

export const moviesFeature = createFeature({
  name: "movies",
  reducer: createReducer(initialState),
});

export const {
  reducer,
  selectMoviesState,
  name: moviesFeatureKey,
} = moviesFeature;
