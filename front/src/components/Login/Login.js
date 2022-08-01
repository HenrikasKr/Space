import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css';
import { login } from '../../api/libraries/apiLibraries';
import { useNavigate } from "react-router-dom";

function Login() {
    
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // POST data using parameter data
  function onSubmit(data) {

    login(data).then((res) => {
        localStorage.setItem("tokenAdmin", JSON.stringify(res.data.token))
    })
    setTimeout(() => {
      navigate("/addnews");
    }, "500");
  }


  return (
    <div className="login-page">
      <div className='login-box'>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <input
          className="login-form"
          type="username"
          name="username"
          placeholder="Username"
          {...register("username")}
        />
        <input
          className="login-form"
          type= "password"
          name="password"
          placeholder="Password"
          {...register("password")}
        />
        <button className="Login-form-btn" type="submit">
          Login
        </button>
      </form>
      </div>
    </div>
  );
}

export default Login;