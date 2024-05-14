import { screen, render } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  render(<Home />);
  it("should render HomePage", () => {
    screen.getByText("app/page.tsx");
  });
});
