import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserData, isLoggedIn } from "../store/userSlice";

const Login = () => {
  const { handleSubmit, register, formState:{errors} } = useForm();
  const [isSignin, setIsSignin] = useState(true);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleForm(data) {
    data.phone='776687867'
    navigate('/')
    dispatch(isLoggedIn(true))
    dispatch(addUserData(data))
  }

  return (
    <div className="min-w-80 md:min-w-96  w-1/3 border  p-5 md:py-14 md:px-10 my-20 mx-auto shadow-xl rounded-md ">
      <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-5 text-gray-500">
        <div>
          <h1 className="text-3xl text-black">{isSignin ? 'Signup' :'Login'}</h1>
          <p className="w-full">{isSignin ? 'Please signup to book appointment':'Please login to book appointment'}</p>
        </div>
        {
          isSignin &&
          <div className="flex flex-col">
            <div>
            <label>Full Name</label>
            <strong className="text-red-600 ms-2">{errors?.fullName?.message}</strong>
            </div>
          <input type="text" className="h-10 ps-3 rounded-md border " 
            {...register('fullName',{
              required:'*'
            })}
          />
        </div>
        }
        <div className="flex flex-col">
        <div>
            <label>Email</label>
            <strong className="text-red-600 ms-2">{errors?.email?.message}</strong>
            </div>
          <input type="text" className="h-10 ps-3 rounded-md border " 
            {...register('email',{
              required:'*'
            })}
          />
        </div>
        <div className="flex flex-col">
          <div>
            <label>Password</label>
            <strong className="text-red-600 ms-2">{errors?.password?.message}</strong>
            </div>
          <input type="password" className="h-10 ps-3 rounded-md border" 
             {...register('password',{
              required:'*'
            })}
          />
        </div>
        <button className="w-24 py-2 border rounded-full self-center hover:bg-primary hover:text-white ">
         {isSignin ? "Signup" : "Login"}
        </button>
      </form>
      <div className="flex items-center gap-2 mt-5">
        <p className="text-sm text-gray-500">{isSignin ? 'Already have an account?' :'Create account'}</p>
        <button className="hover:-translate-y-1 transition-all duration-500" onClick={()=>setIsSignin(!isSignin)}>{isSignin ? "Login" : "Signup"}</button>
      </div>
    </div>
  );
};

export default Login;
