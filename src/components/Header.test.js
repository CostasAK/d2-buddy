import { render, screen } from "@testing-library/react";

import Header from "./Header";

test("renders header title", () => {
  render(<Header />);
  const linkElement = screen.getByText(/destiny 2 buddy/i);
  expect(linkElement).toBeInTheDocument();
});
