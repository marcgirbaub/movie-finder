import { render, screen } from "@testing-library/angular";
import "@testing-library/jest-dom";
import { HeaderComponent } from "./header.component";

describe("Given a HeaderComponent", () => {
  describe("When rendered", () => {
    const renderComponent = async () => {
      await render(HeaderComponent, {});
    };

    test("Then it should show two anchors", async () => {
      const search = "Search";
      const favourites = "Favourites";

      await renderComponent();

      const searchAnchorElement = screen.getByRole("link", { name: search });
      const favouritesAnchorElement = screen.getByRole("link", {
        name: favourites,
      });

      expect(searchAnchorElement).toBeInTheDocument();
      expect(favouritesAnchorElement).toBeInTheDocument();
    });
  });
});
