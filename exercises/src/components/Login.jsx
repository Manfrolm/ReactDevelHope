import { useState } from "react";

export function Login({stateLogin}) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleReset = () => {
    setData({
        username: '',
        password: '',
        remember: false
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    stateLogin()
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={data.username}
        onChange={handleInputChange}
        placeholder="username"
      />
      <input
        name="password"
        value={data.password}
        onChange={handleInputChange}
        placeholder="password"
      />
      <input
        name="remember"
        type="checkbox"
        checked={data.remember}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={!data.username || !data.password}>Login</button>
      <button name="reset" onClick={handleReset}>Reset</button>
      </form>
    </>
  );
}
