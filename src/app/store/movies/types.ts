import { type Movie } from "src/types/types";

export interface FavMovie extends Movie {
  description?: string;
}

export type FavouriteMovies = FavMovie[];
