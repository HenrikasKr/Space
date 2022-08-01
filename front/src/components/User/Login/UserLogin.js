import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import { userlogin } from '../../../api/libraries/apiLibraries';
import { useNavigate } from "react-router-dom";
import { getUserbyName } from '../../../api/libraries/apiLibraries';

function UserLogin() {
    
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // POST data using parameter data
  function onSubmit(data) {

    userlogin(data).then((res) => {
        localStorage.setItem("tokenUser", JSON.stringify(res.data.token))
        getUserbyName({username : data.username}).then(function(res){
        localStorage.setItem("userid", (res.data.data.users[0]._id))
        });
   

    })
    setTimeout(() => {
      navigate("/");
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

export default UserLogin;