import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { render, screen } from "@testing-library/react";

describe('CardList Component', () => {
  test('renders error message when component catch an error', async () => {
    const ThrowError = () => {
      throw new Error('test');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  test('mock child renders correctly and no errors are caught', () => {
    const MockChild = () => <>Rendered Successfully</>;

    render(
      <ErrorBoundary>
        <MockChild />
      </ErrorBoundary>
    );

    expect(screen.getByText(/rendered successfully/i)).toBeInTheDocument();
  });
});