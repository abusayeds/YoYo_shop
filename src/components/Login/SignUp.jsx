// import {  } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const [error , setError] = useState()
    const hendelSubmit = (event) => {
        event.preventDefault()
        const from = event.target
        const email =from.email.value
        const password =from.password.value
        const confirm_password= from.confrim_password.value
       
    
         if(password.length< 6){
           setError('Passwoer shud be 5 number')
          
         }
         if(password !== confirm_password){
            setError('password did nit match')
            return
          }
          createUser(email,password)
          .then( result  => {
              const user = result.user
              console.log(user);
              from.reset();
          })
          .catch(error => console.error('error' , error))
          
    }
    return (
        <main className=' md:flex bg-gray-100 md:p-10  justify-around md:w-5/6 md:mx-auto my-10'>
        {/* sm devise */}
        <div className='w-full h-full md:hidden'>
            <img className='w-full' src="https://www.1stop.ai/images/login-bg.png" alt="" srcset="" />
        </div>
        {/* sm devise */}
        <div className=' md:ml-20  md:w-3/6 m-auto p-3  bg-gray-50'>
            <form onSubmit={ hendelSubmit}>
              <p className='font-semibold text-2xl'> Registation  now ! </p>
              <p className='text-gray-400 mt-2'> Have an account  please ? <Link to= '/login'> <small className=' font-semibold text-blue-500'>Login</small></Link></p>
              <p className=' font-semibold mt-2'>Email address</p>
              <input className='w-full outline-none border p-2 rounded mt-2 ' type="email" name="email"  placeholder='Your email' required />
              <br />
              <p className=' font-semibold mt-2'>Password</p>
              <input className='w-full outline-none border p-2 rounded mt-2 ' type="password" name="password" placeholder='password' required />
              <br />
              <p className=' font-semibold mt-2'>Re-Type-Password</p>
              <input className='w-full outline-none border p-2 rounded mt-2 ' type="password" name="confrim_password" placeholder='Re-Type-Password' required />
              <br />
              <div className='flex gap-2 mt-2'>
                <input type="checkbox" name="" id="" />
                <p>Remabner you </p>
              </div>
              <br />
              <input className='w-full bg-blue-400 p-2 rounded hover:bg-blue-500 hover:font-semibold hover:text-white' type="submit"  value="Registation" />
              <br />
            </form>

        </div>
        <p className='text-red-800'>{error}</p>
        <div className=' md:block hidden '>
            <img  src="https://www.1stop.ai/images/login-bg.png" alt="" srcset="" />
        </div>
      </main>
    );
};

export default SignUp;