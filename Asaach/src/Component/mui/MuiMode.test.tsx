import { render, screen } from "../../test-util";
import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent(/Dark mode/i);
  });
});
