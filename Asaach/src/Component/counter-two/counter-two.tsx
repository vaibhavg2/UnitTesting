import { CounterTwoProps } from "./counter-two.types";

export const CounterTwo = (props: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{props.count}</p>
      {props.handelIncrement && (
        <button onClick={props.handelIncrement}>Increment</button>
      )}
      {props.handelDecrement && (
        <button onClick={props.handelDecrement}>Decrement</button>
      )}
    </div>
  );
};
