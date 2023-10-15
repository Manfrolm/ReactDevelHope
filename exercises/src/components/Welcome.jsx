import { Age } from './Age'

export function Welcome({name, age}) {
  return (
    <>
      <p>Welcome, {name}</p>

      {(age > 18 && age < 65) && (name === "John") && <Age age={age} />}
    </>
  );
}
