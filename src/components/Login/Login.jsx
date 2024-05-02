import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import { GoogleAuthProvider } from "firebase/auth";





const Login = () => {
    const provider = new GoogleAuthProvider()
    const navigete = useNavigate()
    const {hendelgooglesignin,signup} = useContext(AuthContext)
  const location = useLocation()
  console.log(location);
    const googlesignin = () => {
        hendelgooglesignin(provider, navigete ,location)
        navigete( '/')
    }
    const hendelSubmit = (event) => {
        event.preventDefault()
        const from = event.target
        const email =from.email.value
        const password =from.password.value
    
        signup(email,password)
        .then(result => {
            const user =result.user
            navigete( location?.state ? location?.state : '/')
            from.reset()
            
        })
        .catch(error => console.error('error' , error))
    }

    return (
      <main className=' md:flex bg-gray-100   justify-around md:w-5/6 md:mx-auto my-10'>
        {/* sm devise */}
        <div className='w-full h-full md:hidden'>
            <img className='w-full' src="https://www.1stop.ai/images/login-bg.png" alt="" srcset="" />
        </div>
        {/* sm devise */}
        <div className=' md:ml-20  md:w-3/6 m-auto p-3  bg-gray-50'>
            <form onSubmit={hendelSubmit}>
              <p className='font-semibold text-2xl'> Login now ! </p>
              <p className='text-gray-400 mt-2'>Doesn,t have an account ? <Link to= '/signup'> <small className=' font-semibold text-blue-500'>Sign-Up</small></Link></p>
              <p className=' font-semibold mt-2'>Email address</p>
              <input className='w-full outline-none border p-2 rounded mt-2 ' type="email" name="email"  placeholder='Your email' required />
              <br />
              <p className=' font-semibold mt-2'>Password</p>
              <input className='w-full outline-none border p-2 rounded mt-2 ' type="password" name="password"  placeholder='password' required />
              <br />
              <div className='flex gap-2 mt-2'>
                <input type="checkbox" name="" id="" />
                <p>Remabner you </p>
              </div>
              <br />
              <input className='w-full bg-blue-400 p-2 rounded hover:bg-blue-500 hover:font-semibold hover:text-white' type="submit"  value="Login" />
              <br />
              <p className='text-gray-400 mt-2 text-sm text-center'>or log in with</p>
              
           <div className='flex items-center gap-2'>
           <button onClick={() => googlesignin()} className='w-full mt-2 p-2 border border-orange-500 rounded '>
              <FontAwesomeIcon className=' text-blue-600' icon={faGoogle}></FontAwesomeIcon> <small className='ml-1'>google</small>
            </button>
            <p>or</p>
            <button className='w-full mt-2 p-2 border border-gray-400 rounded '>
              <FontAwesomeIcon className=' text-blue-600' icon={faFacebook}></FontAwesomeIcon> <small className='ml-1'>Facebook</small>
              </button>
           </div>
            </form>

        </div>
        <div className=' md:block hidden '>
            <img className='w-full h-full' src="https://www.1stop.ai/images/login-bg.png" alt="" srcset="" />
        </div>
      </main>
    );
};

export default Login;