import { render, screen } from "@testing-library/react";

import Header from ".";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../queryClient";

test("renders header title", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
  );
  const linkElement = screen.getByText(/destiny 2 buddy/i);
  expect(linkElement).toBeInTheDocument();
});
