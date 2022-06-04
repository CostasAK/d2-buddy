import { render, screen } from "@testing-library/react";

import Footer from "./Footer";
import { ThemeProvider } from "styled-components/macro";
import { theme } from "../style/theme";

test("renders author", () => {
  render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/CostasAK/);
  expect(linkElement).toBeInTheDocument();
});

test("renders support", () => {
  render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/support/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders source", () => {
  render(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/source/i);
  expect(linkElement).toBeInTheDocument();
});
