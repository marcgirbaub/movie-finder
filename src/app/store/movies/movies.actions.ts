import { createAction, props } from "@ngrx/store";
import { type FavMovie } from "./types";

export const addToFavourites = createAction(
  "[Movies] Add Movie",
  props<{ payload: FavMovie }>()
);
