import { Counter } from "./Counter";

export function Profilepic({ pic, name }) {
  return (
    <div>
      <img className="Apple" src={pic} alt="userpic"/>
      <h1>{name}</h1>
      <Counter/>
    </div>
  );
}
