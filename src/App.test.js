import { render, screen } from "@testing-library/react";

import { App } from "./App";

test("renders description", () => {
  render(<App />);
  const linkElement = screen.getByText(/destiny 2 buddy/i);
  expect(linkElement).toBeInTheDocument();
});
