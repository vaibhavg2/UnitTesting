import { render, screen } from "@testing-library/react";
import Users from "./users";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("render a list of user", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("render error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (res: any, req, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const error = await screen.findAllByText("Error fetching users");
  });
});
