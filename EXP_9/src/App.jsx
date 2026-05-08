import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React, {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState("");
  const le = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (name.trim() === "") {
      formErrors.name = "Name is required";
    }
    if (!email.includes("@")) {  //not includes @
      formErrors.email = "email must include";
    }
    if (password.length < 6) {
      formErrors.password = "password must be longer than 6 characters";
    }

    const newUser = {
    name : name,
    email : email
  };

  setUsers([...users, newUser]);
  setSuccess("seccess");
  setName("");
  setEmail("");
  setPassword("");
  }
}



  return (
    <>
      <div className="container">
        <h2>Form</h2>
        <form>
             <div className="formContent">
              <input type="text"  name="name" placeholder='enter name' value={name}/>
               {errors.name && <span className="error-text">{errors.name}</span>}

              <input type="email" name="email" placeholder='enter email' value={email}/>
               {errors.email && <span className="error-text">{errors.email}</span>}

              <input type="password" name='password' placeholder='set password' value={password}/>
               {errors.password && <span className="error-text">{errors.password}</span>}
             </div>

             <button type='submit'>Register</button>
             
        </form>
      </div>
    </>
  )


export default App
