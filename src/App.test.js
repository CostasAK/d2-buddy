import { render, screen } from '@testing-library/react';

import App from './App';

test("renders description", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Reset Timers and other Countdowns for Final Fantasy XIV, in your local time with countdowns/i
  );
  expect(linkElement).toBeInTheDocument();
});
