import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

test("renders author", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/CostasAK/);
  expect(linkElement).toBeInTheDocument();
});

test("renders support", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/support/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders source", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/source/i);
  expect(linkElement).toBeInTheDocument();
});
