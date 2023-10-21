import React from "react";

export const UncontrolledLogin = () => {
  function handleSubmit(e) {
    e.preventDefault();


    // Metodo 1
    // const username = e.target.username.value;
    // const password = e.target.password.value;
    // const remember = e.target.remember.checked;

    // console.log(username);
    // console.log(password);
    // console.log(remember);

    // Metodo 2
    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on" ? true : false,
    };

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="remember" />
      <button type="submit">Login</button>
      <button type="reset">Reset</button>
    </form>
  );
};
