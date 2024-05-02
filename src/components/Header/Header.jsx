
import React, { useContext, useEffect, useState } from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faAngleUp, faArrowRightFromBracket, faBars, faHome, faSearch, faShoppingCart, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import api from '../../api';

const Header = () => {
       
      
        const {  collection,cartItem,user, logOut} =useContext(AuthContext)
        const [open, setOpen ] = useState(false)
        const [up, setUp] =useState(false)
        const [features , setFeatures] = useState(false)
        const [Profile, setProfile] = useState(false)
        
      
      
    return (
        <main className=' relative  bg-teal-600 h-full text-white '>
        <section className='header-section   md:p-5 '>

         <section className=' w-full'>
         <div className='  flex  justify-between w-full items-center  bg-teal-600 p-5 '>
         <div className='flex justify-center  items-center z-50'>
           <p className='text-4xl font-bold'>YoYo_Shop </p>
         </div>
         <div className='flex md:hidden items-center' onClick={() => setOpen(!open)}>
            {
                open ?  <FontAwesomeIcon className='font-semibold  text-2xl' icon={faX}></FontAwesomeIcon>
                :  <FontAwesomeIcon className='font-semibold  text-2xl' icon={faBars}></FontAwesomeIcon> 
            }
           
         </div>
        <div className=' md:flex hidden md:w-96 md:mx-auto '>

            </div>
       </div>
         </section>

         <div className='  md:flex justify-center items-center hidden gap-5  ml-5 p-2 '>

            
            
            <div className=' h-16 w-16 relative ' >
            <Link to= '/cart'>
            <FontAwesomeIcon  className=' bg-teal-200 text-teal-600 p-2 rounded-full' icon={faShoppingCart}></FontAwesomeIcon>
            <br />   
            <span className=' text-xxl font-semibold  ' >Mycart</span>
            <p className='absolute  bottom-12 right-5 text-1xl    rounded-full px-2 bg-red-600  '> <small>{cartItem.length}</small> </p></Link>
            </div>
           

            <div className='h-16 w-16'>
            <FontAwesomeIcon  className=' bg-teal-200 text-teal-600 p-2 rounded-full'  icon={faHeart}></FontAwesomeIcon>
            <br />
            <span className=' text-xxl font-semibold'>Wishlist</span>
            </div>

            <div className='h-16  w-16 ' onClick={() => setProfile(!Profile)} >
              {
                user?.email ?
                 <div>
                 {
                    user?.photoURL ? <div>
                        <img className='w-9 rounded-full' src={user?.photoURL} alt=""  /> 
                       <span className=' text-1xl font-semibold'>Profile</span>
                    </div>
                    :
                    <div>
                    <FontAwesomeIcon  className=' bg-teal-200 text-teal-600 p-2 rounded-full '  icon={faUser}></FontAwesomeIcon>
                    <br />
                    <span className=' text-xxl font-semibold'> Profile</span>
                    </div>
                 }
                </div> 
                :
                <div>
                <FontAwesomeIcon className=' bg-teal-200 text-teal-600 p-2 rounded-full' icon={faUser}></FontAwesomeIcon>
                <br />
                <span className=' text-xxl font-semibold'>Profile</span>
                </div>
              }
            </div>

          </div>

          {/* mobil devise   */}
         <div className ={`   flex  items-start  md:hidden absolute  w-full mt-20  bg-zinc-900 h-lvh text-white
                           duration-500 ${open ? 'left-0' : 'left-[-100%]'} `}>
               <div className='w-full'>
                
                <div className='w-full divide-y '>
                    {/* <div className='relative p-2 px-4'>
                        <input className='w-full rounded  bg-zinc-700 p-2 border border-zinc-500 focus:outline-none ' type="text" placeholder='search' />
                        <FontAwesomeIcon className='absolute text-white mt-4  right-7' icon={faSearch}></FontAwesomeIcon>
                    </div> */}
                 
                <div onClick={() => setOpen(false)} >
                    <p className='ml-4 p-2'><Link to='/'> HOME</Link></p>
                 </div>
                <div onClick={() => setOpen(false)} >
                <p className='ml-4 p-2'><Link to='/order'> ORDER</Link> </p>
                </div>
                <div onClick={() => setOpen(false)}>
                <p className='ml-4 p-2'><Link to='/block'> BLOCK</Link></p>
                </div>
                      
              
                <div className='  divide-y divide-zinc-700 flex items-center gap-2 ' onClick={() => setUp(!up)} >
                    <p className='ml-4 p-2'>FEATURES</p>
                    <p>
                    {
                    up ? <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                    : <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon> 
                    } 
                     </p>
                     
                </div>
                <div  className={`  bg-zinc-800 duration-500 w-full  ${up ? 'left-0' : 'hidden'}`}>
                    <p className='ml-8 p-2 mt-2'>men</p>
                    <p className='ml-8 p-2 mt-2'>men</p>
                    <p className='ml-8 p-2 mt-2'>men</p>
                    <p className='ml-8 p-2 mt-2'>men</p>
                    <p className='ml-8 p-2 mt-2'>men</p>
                </div>
                
                <div className='flex items-center gap-2  p-2' onClick={() => setFeatures(!features)}> 
                <p className='ml-4'>All Category</p>
                <p>
                    {
                    features ? <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                    : <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon> 
                    } 
                     </p>
                </div>
                <div className={  `  w-full z-50 bg-zinc-800 mb-20 duration-500  ${features? 'left-0' : 'hidden'}`}>
                  
                    {
                            collection.map(col => 
                                <p  key={col._id} className='ml-8 p-2 mt-2'>
                                   <Link onClick={() => setOpen(false)} to={`/collection/${col.category}`}>{col.name}</Link>
                                </p>
                                )
                        }
                </div>
                </div>
               </div>
          </div>
           
           <section className='fixed bottom-0 bg-white text-black w-full'>
           <div className='  flex md:hidden gap-5 justify-around p-2 '>

           <div>
          <Link to= "/">
          <FontAwesomeIcon className='text-1xl ml-3   ' icon={faHome}></FontAwesomeIcon>
          <p className='font-semibold'> <small>Home</small></p>
          </Link>
        </div>

        <div className=' relative ' >
        <Link to='/cart'>
        <FontAwesomeIcon className='text-1xl    ' icon={faShoppingCart}></FontAwesomeIcon>   
        <p className='font-semibold' > <small>Cart</small> </p>
        <p className='absolute bottom-9  left-2 text-1xl    rounded-full px-2 bg-red-600  '> <small>{cartItem.length}</small> </p>
        </Link>
        </div>

        <div>
        <FontAwesomeIcon className='text-1xl ml-3  ' icon={faHeart}></FontAwesomeIcon>
        <p className='font-semibold'> <small>wishlist</small></p>
        </div>

        <div onClick={() => setProfile(!Profile)}>
        {
            user?.photoURL ?  <img className='w-6 rounded-full' src={user?.photoURL} alt=""  /> 
            : <FontAwesomeIcon  icon={faUser}></FontAwesomeIcon>
        }
        <p className=' text-xxl font-semibold'><small>Profile</small></p>
        </div>

        </div>
        </section>
     
        </section>
       
     {
        Profile && (
            <div className='  cursor-pointer flex justify-center items-center md:absolute fixed bottom-16   md:top-24  z-50 right-2  shadow-lg rounded bg-white text-black h-44 w-40 '>
        
            <div className=''>
              {
                user?.email ? <div className='flex gap-5 justify-between'>
                {
                    user?.displayName ? <p>{user?.displayName}</p>: <p>UnKnow</p>
                }
                {
                    user?.displayName ? <img className='w-6 rounded-full' src={user?.photoURL} alt=""  />   :  <FontAwesomeIcon className=' bg-slate-300 p-2 rounded-full' icon={faUser}></FontAwesomeIcon>
                }
                </div>
                : <div>
                 <p className='mt-2'>Profile</p>
                </div>
              }
               <div className='flex justify-between items-center mt-2'>
                <p> <Link to='/cart'>My Items </Link></p>
                <p>{cartItem.length}</p>
               </div>
               <div className='flex justify-between items-center mt-2'>
                <p>Favourite </p>
                <p>0</p>
               </div>
               {
                user?.email ? <p className='mt-2' onClick={() =>  logOut()}>LogOut <FontAwesomeIcon className='ml-2' icon={faArrowRightFromBracket}></FontAwesomeIcon> </p>
                :<p className='mt-2'><Link to='/login'>Log in now !</Link> </p>
               }
              <p className='mt-2'><Link to='/signup'>Registation !</Link> </p>
             </div>
      
          </div>
        )
     }
        </main>
    );
};

export default Header;