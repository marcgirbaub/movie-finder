import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  type MoviesApiResponse,
  type Movies,
  type ApiMovie,
  type Movie,
} from "src/types/types";
import { apiUrl, apikey } from "src/api/apiConstants";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  movies: Movies;
  moviesUrl = apiUrl;

  constructor(@Inject(HttpClient) private readonly http: HttpClient) {}

  searchMovies(title: string) {
    const movies$ = this.http.get<MoviesApiResponse>(this.moviesUrl, {
      params: { apikey, s: title },
    });

    movies$.subscribe((data) => {
      const parsedResponse = {
        search: this.convertPropertiesToLowercase(data.Search),
        response: data.Response,
        totalResults: data.totalResults,
      };

      this.movies = parsedResponse.search;
    });
  }

  convertPropertiesToLowercase(apiMovies: ApiMovie[]): Movies {
    const convertedApiMovies: Movies = [];

    apiMovies.forEach((movie) => {
      const convertedMovie: Movie = {
        title: movie.Title,
        year: movie.Title,
        imdbID: movie.imdbID,
        type: movie.Type,
        poster: movie.Poster,
      };

      convertedApiMovies.push(convertedMovie);
    });

    return convertedApiMovies;
  }
}
