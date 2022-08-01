import React from "react";
import { useForm } from "react-hook-form";
import { usersignup, getUsername } from '../../../api/libraries/apiLibraries';
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
import './UserRegister.css'


function UserRegister(){

    const navigate = useNavigate();
    const changeRoute = () => {
        navigate('/')
    }

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();



  function onSubmit(data) {
    usersignup({
        username: data.username,
        password: data.password,
    }).then(() => {
        changeRoute();
    })
  }

    return (
        <div className="reg-container">
            <div className="reg-box">
                <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                    className="reg-username mb-2"
                    type="text"
                    name="username"
                    placeholder="Username"
                    {...register("username", {
                        required: "Field is required",
                        maxLength: {
                          value: 16,
                          message: "Max 16 symbols",
                        },
                        minLength: {
                            value: 3,
                            message: "Min 3 symbols",
                          },
                        validate: {
                          checkUsername: async (value) => {
                            let pass = await getUsername(value);
                            return !pass;
                          }
                        }
                    })}
                    />
                    <span className="error">{errors.username?.message}</span>
                        <span className="error">
                            {errors.username?.type === "checkUsername" &&
                            "This username already exists."}
                        </span>
                    </div>
                    
                    <div>
                    <input
                    className="reg-password mb-2"
                    type="password"
                    name="password"
                    placeholder="Password"
                    {...register("password" , {
                        required: "Field is required",
                        maxLength: {
                            value: 16,
                            message: "Max 16 symbols",
                          },
                          minLength: {
                              value: 6,
                              message: "Min 6 symbols",
                            },
                    })}/> 
                    <span className="error">{errors.password?.message}</span>
                    </div>
                    
                    <div className="reg-btns">
                        <button className="mx-4 reg-btn" type="submit">
                            Register
                        </button>
                        <button className="mx-2 reg-btn" type="reset">
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
      );
}

export default UserRegister;