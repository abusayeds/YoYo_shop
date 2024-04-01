import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <main className=' md:flex bg-gray-100 md:p-10  justify-around md:w-5/6 md:mx-auto my-10'>
        {/* sm devise */}
        <div className='w-full h-full md:hidden'>
            <img className='w-full' src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-login-4489366-3723273.png" alt="" srcset="" />
        </div>
        {/* sm devise */}
        <div className=' md:ml-20  md:w-3/6 m-auto p-3  bg-gray-50'>
            <form>
              <p className='font-semibold text-2xl'> Registation  now ! </p>
              <p className='text-gray-400 mt-2'> Have an account  please ? <Link to= '/login'> <small className=' font-semibold text-blue-500'>Login</small></Link></p>
              <p className=' font-semibold mt-2'>Email address</p>
              <input className='w-full outline-none border p-2 rounded mt-2 ' type="email" name="email" id="" placeholder='Your email' />
              <br />
              <p className=' font-semibold mt-2'>Password</p>
              <input className='w-full outline-none border p-2 rounded mt-2 ' type="password" name="password" id="" placeholder='password' />
              <br />
              <p className=' font-semibold mt-2'>Re-Type-Password</p>
              <input className='w-full outline-none border p-2 rounded mt-2 ' type="password" name="confrim-password" id="" placeholder='Re-Type-Password' />
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
        <div className=' md:block hidden '>
            <img  src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-login-4489366-3723273.png" alt="" srcset="" />
        </div>
      </main>
    );
};

export default SignUp;