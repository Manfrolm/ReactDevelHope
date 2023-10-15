export function Age({ age }) {
  return <>{age > 18 ? <p>Your Age is {age}</p> : <p>Your very young!</p>}</>;
}
