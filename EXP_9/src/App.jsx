// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import React, {useState} from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState("");
//   const [success, setSuccess] = useState("");
//   const [users, setUsers] = useState("");
//   const le = (e) => {
//     e.preventDefault();
//     let formErrors = {};
//     if (name.trim() === "") {
//       formErrors.name = "Name is required";
//     }
//     if (!email.includes("@")) {  //not includes @
//       formErrors.email = "email must include";
//     }
//     if (password.length < 6) {
//       formErrors.password = "password must be longer than 6 characters";
//     }

//     const newUser = {
//     name : name,
//     email : email
//   };

//   setUsers([...users, newUser]);
//   setSuccess("seccess");
//   setName("");
//   setEmail("");
//   setPassword("");
//   }
// }



//   return (
//     <>
//       <div className="container">
//         <h2>Form</h2>
//         <form>
//              <div className="formContent">
//               <input type="text"  name="name" placeholder='enter name' value={name}/>
//                {errors.name && <span className="error-text">{errors.name}</span>}

//               <input type="email" name="email" placeholder='enter email' value={email}/>
//                {errors.email && <span className="error-text">{errors.email}</span>}

//               <input type="password" name='password' placeholder='set password' value={password}/>
//                {errors.password && <span className="error-text">{errors.password}</span>}
//              </div>

//              <button type='submit'>Register</button>
             
//         </form>
//       </div>
//     </>
//   )


// export default App





import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // API Data State
  const [users, setUsers] = useState([]);

  // Step 7: Fetch API data using useEffect
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (formData.password.length < 6) tempErrors.password = "Password must be 6+ chars";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Logic to add the new user to the list locally for display
      const newUser = { id: Date.now(), name: formData.name, email: formData.email };
      setUsers([newUser, ...users]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsSubmitted(false);
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="input-group">
            <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="input-group">
            <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button type="submit" className="register-btn">Register</button>
        </form>

        {isSubmitted && <p className="success-msg">Registration Successful!</p>}

        <div className="user-list-section">
          <h3>Registered Users</h3>
          <ul className="user-list">
            {users.map(user => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;