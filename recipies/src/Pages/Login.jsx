import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [input, setInput] = useState({ email: "", password: "" })
  const [token, setToken] = useState("")
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    axios.post(`https://reqres.in/api/login`, {
      email: input.email,
      password: input.password
    })
      .then((user) => {
        console.log(user.data.token)
        setToken(user.data.token)
        alert('Login sucessful')
      })
      .catch((error) => {
        alert("Email or Password is Wrong")
        console.log(error)
      })
  }
  if (token) {
    navigate("/")
  }




  return (
    <div > {/* Add the form-container class */}
      <div>
        <h1 style={{ color: "green" }} >Login</h1>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} >

          <input value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} type="text" placeholder="Enter Email..." />  <br />

          <br />
          <input value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} type="password" placeholder="Enter Password" /><br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
