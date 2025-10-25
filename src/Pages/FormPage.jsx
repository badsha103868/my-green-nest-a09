import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const FormPage = () => {
  const [error, setError] = useState('');

  const navigate = useNavigate()
   
  const handleBookNow = (e)=>{
    e.preventDefault();
    console.log("form submitted")
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email)
    if(name.length<6){
       setError("Name should be 6 character or more")
       return;
    }
    else{
      setError('')
    }
    toast.success("Booked Successful !")

       MySwal.fire({
      title: "Booked Successful!",
      text: "You Booked Consultation!",
      icon: "success"
       })

    e.target.reset();
    setTimeout(()=>{
      navigate('/plants')
    }, 1000)


  }
 

  return (
    <div className='flex justify-center items-center my-10'>
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleBookNow} className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input 
          type="text"
          className="input"
          name='name'
           placeholder="Your name" required/>
           {
            error && <p className="text-red-500">{error}</p>
           }
           {/* Email */}
          <label className="label mt-2">Email</label>
          <input 
          type="email" 
          className="input" 
          name='email'
          placeholder="Email" required />
          
          
          <button className="btn  bg-green-500 text-white mt-4">Book Now</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default FormPage;