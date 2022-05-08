import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen } from "@testing-library/react";

import App from "./App";

const queryClient = new QueryClient();

test("renders description", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
  const linkElement = screen.getByText(/destiny 2 buddy/i);
  expect(linkElement).toBeInTheDocument();
});
