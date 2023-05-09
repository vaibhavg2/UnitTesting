import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("greet", () => {
  test(" renders directly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    // const textElement = screen.getByText(/hello/i)//wthout see the case of element upper casand lower case
    expect(textElement).toBeInTheDocument();
  });
  test.skip(" renders directly 1", () => {
    render(<Greet name="savant" />);
    const textElement = screen.getByText("Hello savant");
    // const textElement = screen.getByText(/hello/i)//wthout see the case of element upper casand lower case
    expect(textElement).toBeInTheDocument();
  });
  describe("nested", () => {
    test.only(" renders directly 2", () => {
      render(<Greet name="savant" />);
      const textElement = screen.getByText("Hello savant");
      // const textElement = screen.getByText(/hello/i)//wthout see the case of element upper casand lower case
      expect(textElement).toBeInTheDocument();
    });
  });
});
