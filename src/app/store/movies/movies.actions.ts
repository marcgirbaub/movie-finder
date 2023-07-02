import { createAction, props } from "@ngrx/store";
import { type FavMovie } from "./types";

export const addToFavourites = createAction(
  "[Movies] Add Movie",
  props<{ payload: FavMovie }>()
);

export const deleteFromFavourites = createAction(
  "[Movies] Delete Movie",
  props<{ payload: string }>()
);

export const modifyDescription = createAction(
  "[Movies] Modify Description",
  props<{ payload: string }>()
);
