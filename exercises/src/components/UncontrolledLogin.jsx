import React from "react";

export const UncontrolledLogin = () => {
  function handleSubmit(e) {
    e.preventDefault();


    
    const username = e.target.username.value;
    const password = e.target.password.value;
    const remember = e.target.remember.checked;

    const data = {
        username,
        password,
        remember
      }
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
