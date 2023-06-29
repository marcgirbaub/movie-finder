import { HttpClient } from "@angular/common/http";
import { MoviesService } from "./movies.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { apikey } from "../../api/apiConstants";

describe("Given a Movies Service", () => {
  let moviesServie: MoviesService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService],
    });

    moviesServie = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe("When its searchMovies method is called with the title `batman`", () => {
    test("Then it should make a GET request to the search endpoint", () => {
      const searchTitle = "batman";

      moviesServie.searchMovies(searchTitle);
      const req = httpMock.expectOne(
        `${moviesServie.moviesUrl}?apikey=${apikey}&s=${searchTitle}`
      );

      expect(req.request.method).toEqual("GET");
    });
  });
});
