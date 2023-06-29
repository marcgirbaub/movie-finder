import { HttpClient } from "@angular/common/http";
import { MoviesService } from "./movies.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { apikey } from "../../api/apiConstants";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { createMockStore } from "../../spec/mockStore";

describe("Given a Movies Service", () => {
  let moviesService: MoviesService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  const store = createMockStore();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService, { provide: Store, useValue: store }],
    });

    moviesService = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });
  const searchTitle = "batman";

  describe("When its searchMovies method is called with the title `batman`", () => {
    test("Then it should make a GET request to the search endpoint when subscribing to this method", () => {
      moviesService.searchMovies(searchTitle).subscribe();
      const req = httpMock.expectOne(
        `${moviesService.moviesUrl}?apikey=${apikey}&s=${searchTitle}`
      );

      expect(req.request.method).toEqual("GET");
    });
  });

  test("Then it should return an Observable", () => {
    const observableReturned = moviesService.searchMovies(searchTitle);

    expect(observableReturned).toBeInstanceOf(Observable);
  });
});
