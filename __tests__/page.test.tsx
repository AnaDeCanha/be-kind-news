import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Home from "../app/page";

describe("Home", () => {
  render(<Home />);
  const startButton = screen.getByRole("button");

  it("should render disable button when clicked and show loading state", async () => {
    await userEvent.click(startButton);
    expect(startButton).toBeDisabled();
    expect(screen.getByText("Loading")).toBeInTheDocument;
  });

  it("should show a list of headlines news", async () => {
    // Should I do this separate??
  });
});
