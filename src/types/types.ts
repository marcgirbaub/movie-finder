export interface Movie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

export type Movies = Movie[];

export interface ApiMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MoviesApiResponse {
  totalResults: string;
  Response: string;
  Search: ApiMovie[];
}
