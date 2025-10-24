import React, { use, useRef, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const ForgetPassword = () => {

   // error state
      const [error, setError]= useState('')
      const navigate = useNavigate()
  
     const { forgetPassword } = use(AuthContext)
     // forgot password email ref
      const emailRef = useRef()

     //  handleForgetPassword
             const handleResetPassword=(e)=>{
              e.preventDefault();
                const email = emailRef.current.value;
                console.log("forget password", email)
                forgetPassword(email)
                .then(()=>{
                 toast.success("Password reset email sent! Check your Gmail inbox or spam ");
                 setTimeout(()=>{
                  navigate('/auth/login/')
                 }, 1000)

                })
                .catch((error) => {
                 console.log(error.message)
                });
             }
     
  
  return (
   <div className='flex justify-center items-center my-10'>
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-2xl font-bold text-center">Forget Your Password</h1>
        <form onSubmit={handleResetPassword} className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
           type="email" 
           className="input"
             name='email'
             ref={emailRef}
            placeholder="Enter your register email" required onChange={() => setError('')} />
          
          <button className="btn  bg-green-500 text-white mt-4">Reset Password </button>
          {
          error && <p className='text-secondary text-xs'>{error}</p>
          }
        </form>

          
      </div>
    </div>
    </div>
  );
};

export default ForgetPassword;