import { render, screen } from "@testing-library/angular";
import "@testing-library/jest-dom";
import { MovieComponent } from "./movie.component";
import { MaterialModule } from "../../material/material.module";
import { AppModule } from "../../app.module";
import { type FavMovie } from "../../store/movies/types";

const mockMovie: FavMovie = {
  title: "Star Wars: Episode IV - A New Hope",
  year: "1977",
  imdbID: "tt0076759",
  type: "movie",
  poster: "starwarsposterIV.jpg",
};

describe("Given a MovieComponent", () => {
  describe("When rendered with a Star Wars IV movie", () => {
    const renderComponent = async () => {
      await render(MovieComponent, {
        imports: [MaterialModule, AppModule],
        componentProperties: { movie: mockMovie },
      });
    };

    test("Then it should show its title", async () => {
      const movieTitle = mockMovie.title;

      await renderComponent();

      const movieTitleElement = screen.getByRole("heading", {
        level: 2,
        name: movieTitle,
      });

      expect(movieTitleElement).toBeInTheDocument();
    });

    test("Then it should show its image", async () => {
      const movieImageAltText = `${mockMovie.title} poster`;

      await renderComponent();

      const movieImageElement = screen.getByRole("img", {
        name: movieImageAltText,
      });

      expect(movieImageElement).toBeInTheDocument();
    });
  });
});
