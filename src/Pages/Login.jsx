import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
   
  const { signIn } = use(AuthContext)
    const handleLogin =(e)=>{
      e.preventDefault();
      const form = e.target
      const email= form.email.value;
      const password = form.password.value;

      console.log( email, password)
      signIn(email, password)
      .then(result=>{
         const user = result.user
        console.log(user)
      })
       .catch(error=>{
        console.log(error.message)
       })
    }
   
  return (
    <div className='flex justify-center items-center  min-h-screen'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">

         {/* form */}
      <form onSubmit={handleLogin} className="card-body">
        <h1 className="text-2xl font-bold text-center">Login your account</h1>
        
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
           type="email" 
           className="input"
             name='email'
            placeholder="Email" required/>
            {/* password */}
          <label className="label">Password</label>
          <input 
          type="password" 
          className="input"
          name='password'
           placeholder="Password" required />
           {/* forget password */}
          <div><a className="link link-hover">Forgot password?</a></div>
          {/*login  button */}
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        {/* Have An Account */}
         <p className='font-semibold text-center mt-5'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/signUp/'>Sign Up</Link></p>
         {/* social login with google */}
        <button className='btn btn-secondary btn-outline w-full mt-4'><FcGoogle size={24} /> Login with Google</button>
      </form>
    </div>
    </div>
 
  );
};

export default Login;