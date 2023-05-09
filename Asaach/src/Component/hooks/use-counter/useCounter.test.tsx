import { renderHook, act } from "@testing-library/react";
import { userCounter } from "./useCounter";

describe("userCount", () => {
  //by default initial value 0 is checking
  test("should render initial count", () => {
    const { result } = renderHook(userCounter);
    expect(result.current.count).toBe(0);
  });

  //initialy set 10 then result should be 10 check
  test("Should accept and render the same intial count", () => {
    const { result } = renderHook(userCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(userCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
