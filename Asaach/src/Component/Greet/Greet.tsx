import greetProps from "./greet.types";

const greet = (props: greetProps) => {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
};

export default greet;
