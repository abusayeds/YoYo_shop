
import React, { useContext, useState } from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faAngleUp, faBars, faHome, faSearch, faShoppingCart, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Context';






const Header = () => {
        const {collection,cartItem} =useContext(AuthContext)
        const [open, setOpen ] = useState(false)
        const [up, setUp] =useState(false)
        const [features , setFeatures] = useState(false)
    
    
        

    
    return (
        <main className='  bg-teal-600 h-full text-white '>
        <section className='header-section  md:p-5 '>

         <section className=' w-full'>
         <div className='  flex md:justify-around justify-between w-full items-center  bg-teal-600 p-5 '>
         <div className='flex justify-center  items-center z-50'>
           <p className='text-4xl font-bold'>YoYo_Shop </p>
         </div>
         <div className='flex md:hidden items-center' onClick={() => setOpen(!open)}>
            {
                open ?  <FontAwesomeIcon className='font-semibold  text-2xl' icon={faX}></FontAwesomeIcon>
                :  <FontAwesomeIcon className='font-semibold  text-2xl' icon={faBars}></FontAwesomeIcon> 
            }
           
         </div>
         <div className='  hidden  relative md:flex items-center justify-center w-full'>
            <input className='w-4/6 p-2 rounded bg-teal-600 border border-teal-50 focus:outline-none border-spacing-4 placeholder-white' type="text" placeholder='Seach' />
            <FontAwesomeIcon className='absolute right-40  ' icon={faSearch}></FontAwesomeIcon>
         </div>
       </div>
         </section>

         <div className='  md:flex hidden gap-5 justify-around ml-5 p-2 '>

            <div className='  relative ' >
          <Link to= '/cart'>
           <FontAwesomeIcon className=' text-2xl mt-3 ml-2 px-2   ' icon={faShoppingCart}></FontAwesomeIcon>   
            <span className=' text-xxl font-semibold  ' >Mycart</span>
            <p className='absolute bottom-12  right-2 text-1xl    rounded-full px-2 bg-red-600  '> <small>{cartItem.length}</small> </p></Link>
            </div>
           

            <div>
            <FontAwesomeIcon className=' text-2xl mt-3 ml-2 px-2 ' icon={faHeart}></FontAwesomeIcon>
            <span className=' text-xxl font-semibold'>Wishlist</span>
            </div>

            <div>
             <FontAwesomeIcon className='text-2xl mt-3 ml-2 px-2 ' icon={faUser}></FontAwesomeIcon>
             <span className=' text-xxl font-semibold'>Profile</span>
            </div>

          </div>

          {/* mobil devise   */}
         <div className ={`   flex  items-start  md:hidden absolute  w-full mt-20 bg-zinc-900 h-full  text-white
                           duration-500 ${open ? 'left-0' : 'left-[-100%]'} `}>
               <div className='w-full'>
                
                <div className='w-full divide-y divide-zinc-700 '>
                    <div className='relative p-2 px-4'>
                        <input className='w-full rounded  bg-zinc-700 p-2 border border-zinc-500 focus:outline-none ' type="text" placeholder='search' />
                        <FontAwesomeIcon className='absolute text-white mt-4  right-7' icon={faSearch}></FontAwesomeIcon>
                    </div>
                 
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
                <div className={  `  w-full bg-zinc-800  duration-500  ${features? 'left-0' : 'hidden'}`}>
                  
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

        <div>
        <FontAwesomeIcon className='text-1xl ml-3 ' icon={faUser}></FontAwesomeIcon>
        <p  className=' text-xxl font-semibold'><small>Profile</small></p>
        </div>

        </div>
           </section>
        </section>
        
        </main>
    );
};

export default Header;