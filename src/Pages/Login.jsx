import React, { use, useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

  // errr state
  const [error, setError]= useState('')

  //  use location
  const location = useLocation()
  
  // use navigate
  const navigate =useNavigate()
    console.log(location)
   
    // google provider
    const googleProvider = new GoogleAuthProvider();

     
  // use context
  const { signIn, googleSignIn } = use(AuthContext)

// handleSign in 
    const handleLogin =(e)=>{
      e.preventDefault();
       setError('')
      const form = e.target
      const email= form.email.value;
      const password = form.password.value;

      console.log( email, password)

      signIn(email, password)
      .then(result=>{
        const user = result.user
        console.log(user)

     toast.success("Log in successfully!");
      setTimeout(() => {
      navigate(location.state ? location.state : '/');
    }, 1000); 
       form.reset()
      })
       .catch(error=>{
        // console.log(error.message)
        console.log(error)
        setError(error.message)

        toast("Please provide a valid email or password")
          form.reset()
       })
    }

  //  google sign in
  const handleGoogleSignIn= ()=>{
        googleSignIn(googleProvider)
        .then(result =>{
        const user = result.user
      console.log(user)
      toast.success("Log in successfully!");
      setTimeout(() => {
      navigate(location.state ? location.state : '/');
        }, 1000);
        })
        .catch(error=>{
          console.log(error)
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
            placeholder="Email" required onChange={() => setError('')} />

            {/* password */}
          <label className="label">Password</label>
          <input 
          type="password" 
          className="input"
          name='password'
           placeholder="Password" required 
           onChange={() => setError('')}  />

           {/* forget password */}
          <div><a className="link link-hover">Forgot password?</a></div>

          {/*login  button */}
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        
        {/* error showing  */}
        {
          error && <p className='text-secondary text-xs'>{error}</p>
        }

        </fieldset>

        {/* Have An Account */}
         <p className='font-semibold text-center mt-5'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/signUp/'>Sign Up</Link></p>

         {/* social login with google */}
        <button onClick={handleGoogleSignIn} className='btn btn-secondary btn-outline w-full mt-4'><FcGoogle size={24} /> Login with Google</button>
      </form>
    </div>
    </div>
 
  );
};

export default Login;