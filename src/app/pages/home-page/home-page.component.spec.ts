import { HttpClientTestingModule } from "@angular/common/http/testing";
import { render, screen } from "@testing-library/angular";
import "@testing-library/jest-dom";
import { HomePageComponent } from "./home-page.component";
import { MaterialModule } from "../../material/material.module";

describe("Given a HomePageComponent", () => {
  describe("When rendered", () => {
    const renderComponent = async () => {
      await render(HomePageComponent, {
        imports: [HttpClientTestingModule, MaterialModule],
      });
    };

    test("Then it should show an input with the placeholder `Search`", async () => {
      await renderComponent();

      const input = screen.getByRole("searchbox");

      expect(input).toBeInTheDocument();
    });
  });
});
