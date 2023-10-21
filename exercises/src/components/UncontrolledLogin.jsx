import React from 'react'

export const UncontrolledLogin = () => {

    function handleSubmit(e){
        e.preventDefault();
   
        alert("Successful Login")
   }
   
   

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="checkbox" name="remember" />
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
    </form>
  )
}
