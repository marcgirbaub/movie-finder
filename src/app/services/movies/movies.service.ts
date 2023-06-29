import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import {
  type MoviesApiResponse,
  type Movies,
  type ApiMovie,
  type Movie,
  type ParsedMoviesApiResponse,
} from "src/types/types";
import { apiUrl, apikey } from "../../api/apiConstants";
import { type Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  moviesUrl = apiUrl;

  constructor(@Inject(HttpClient) private readonly http: HttpClient) {}

  searchMovies(title: string): Observable<ParsedMoviesApiResponse> {
    const movies$ = this.http
      .get<MoviesApiResponse>(this.moviesUrl, {
        params: { apikey, s: title },
      })
      .pipe(
        map(({ Response, Search, totalResults }) => ({
          search: this.convertPropertiesToLowercase(Search),
          response: Response,
          totalResults,
        }))
      );

    return movies$;
  }

  convertPropertiesToLowercase(apiMovies: ApiMovie[]): Movies {
    const convertedApiMovies: Movies = [];

    apiMovies.forEach((movie) => {
      const convertedMovie: Movie = {
        title: movie.Title,
        year: movie.Year,
        imdbID: movie.imdbID,
        type: movie.Type,
        poster: movie.Poster,
      };

      convertedApiMovies.push(convertedMovie);
    });

    return convertedApiMovies;
  }
}
