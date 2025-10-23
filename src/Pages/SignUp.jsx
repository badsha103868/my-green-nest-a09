import React, { use } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
      

    const { createUser } = use(AuthContext)


    const handleSignUp =(e)=>{
      e.preventDefault()
      console.log("sign up  form submitted ")
      const form = e.target
      const name = form.name.value;
      const photoUrl = form.photoUrl.value;
      const email= form.email.value;
      const password = form.password.value;

      console.log(name, photoUrl, email, password)
    
       createUser(email, password)
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
      <form onSubmit={handleSignUp} className="card-body">
        <h1 className="text-2xl font-bold text-center">Sign up your account</h1>
        
        <fieldset className="fieldset">
          
          {/* Name */}
          <label className="label">Name</label>
          <input 
          type="text" 
          className="input" 
          name='name'
          placeholder="Your Name" required />
           {/* Photo Url */}
          <label className="label">Photo URL</label>
          <input 
          type="text" 
          className="input" 
          name='photoUrl'
          placeholder="Your Photo URL" required />
          {/* email */}
          <label className="label">Email</label>
          <input
           type="email" 
           className="input"
             name='email'
            placeholder="Email" required />
            {/* password */}
          <label className="label">Password</label>
          <input 
          type="password" 
          className="input"
          name='password'
           placeholder="Password" required />
           
          {/*login  button */}
          <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
         <p className='font-semibold text-center mt-5'>All Ready Have An Account ? <Link className='text-secondary' to='/auth/login/'>Login</Link></p>
          <button className='btn btn-secondary btn-outline w-full mt-4'><FcGoogle size={24} /> Login with Google</button>
      </form>

    </div>
    </div>
  );
};

export default SignUp;