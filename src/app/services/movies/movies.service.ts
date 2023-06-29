import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
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
import {
  addToFavourites,
  deleteFromFavourites,
} from "../../store/movies/movies.actions";
import {
  type FavouriteMovies,
  type FavMovie,
} from "src/app/store/movies/types";
import { selectMoviesState } from "../../store/movies/movies.reducer";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  moviesUrl = apiUrl;
  favouriteMovies: FavouriteMovies = [];

  constructor(
    @Inject(HttpClient) private readonly http: HttpClient,
    @Inject(Store) private readonly store: Store
  ) {}

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

  addToFavourites(movie: FavMovie): void {
    this.store.dispatch(addToFavourites({ payload: movie }));
  }

  deleteFromFavourites(movieId: string): void {
    this.store.dispatch(deleteFromFavourites({ payload: movieId }));
  }

  getFavouriteMoviesState(): void {
    this.store.select(selectMoviesState).subscribe((favouriteMovies) => {
      this.favouriteMovies = favouriteMovies;
    });
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
