export const createMockStore = () => ({
  dispatch: jest.fn(),
  select: jest.fn().mockReturnValue([
    {
      title: "Star Wars",
      imdbID: "12345",
      year: "2000",
      poster: "poster.png",
      type: "movie",
    },
  ]),
});
