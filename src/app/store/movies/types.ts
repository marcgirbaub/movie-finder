export interface FavMovie {
  title: string;
  year: string;
  poster: string;
  type: string;
  description?: string;
}

export type FavouriteMovies = FavMovie[];
