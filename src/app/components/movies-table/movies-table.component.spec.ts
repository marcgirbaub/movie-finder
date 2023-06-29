import { render, screen } from "@testing-library/angular";
import "@testing-library/jest-dom";
import { MoviesTableComponent } from "./movies-table.component";
import { MaterialModule } from "../../material/material.module";
import { AppModule } from "../../app.module";
import { type Movies } from "../../../types/types";

const mockMovies: Movies = [
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: "1977",
    imdbID: "tt0076759",
    type: "movie",
    poster: "starwarsposterIV.jpg",
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: "1980",
    imdbID: "tt0080684",
    type: "movie",
    poster: "starwarsposterV.jpg",
  },
];

describe("Given a MoviesTableComponent", () => {
  describe("When rendered with a list of two star wars movies", () => {
    const renderComponent = async () => {
      await render(MoviesTableComponent, {
        imports: [MaterialModule, AppModule],
        componentProperties: { movies: mockMovies },
      });
    };

    test("Then it should show its titles", async () => {
      const firstMovieTitle = mockMovies[0].title;
      const secondMovieTitle = mockMovies[1].title;

      await renderComponent();

      const firstTitleElement = screen.getByText(firstMovieTitle);
      const secondTitleElement = screen.getByText(secondMovieTitle);

      expect(firstTitleElement).toBeInTheDocument();
      expect(secondTitleElement).toBeInTheDocument();
    });

    test("Then it should show its images", async () => {
      const firstMovieAlt = `${mockMovies[0].title} poster`;
      const secondMovieAlt = `${mockMovies[1].title} poster`;

      await renderComponent();

      const firstImageElement = screen.getByRole("img", {
        name: firstMovieAlt,
      });
      const secondTitleElement = screen.getByRole("img", {
        name: secondMovieAlt,
      });

      expect(firstImageElement).toBeInTheDocument();
      expect(secondTitleElement).toBeInTheDocument();
    });
  });
});
