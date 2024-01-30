import { faAngleDown, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
// import './Navber.css'

const Navber = () => {
  
    const {collection} = useContext(AuthContext)
    const [open, setOpen ] = useState(false)
   const [fix , setFix] = useState(false)
  
   const fixed = () => {
    if(window.scrollY >= 392) {
        setFix(true)
    }
    else{
        setFix(false)
    }
   }
   window.addEventListener("scroll", fixed)
    return (
      <main className='sticky top-0 '>
         <section>
         <div className={`md:flex hidden justify-start text-black w-full z-50  ${fix ? 'bg-teal-600 ' : 'bg-white text-black transition ease-in-out delay-150 duration-500'}`}>
            <div className=' flex justify-between items-center w-80 z-50 bg-teal-700 py-3 px-8'>
                <p className=' text-white text-2xl'>All Catagorise</p>
                <div onClick={() => setOpen(!open)}>
                    {
                        open ? <FontAwesomeIcon  className='text-white text-2xl' icon={faX}></FontAwesomeIcon>
                        :<FontAwesomeIcon className='text-white text-2xl' icon={faBars}></FontAwesomeIcon>
                    }
             
                </div>
            </div>
            
            <div className={`flex  gap-5 items-center md:ml-8  ${fix ? 'text-white': 'text-black' }`} >
                <p className=''> <Link to='/'> HOME</Link> </p>
                <p className=''> <Link to='/order'> ORDER</Link> </p>      
                <p className=''> <Link to='/block'> BLOCK</Link></p>
                <p className=''> FESTURES <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></p>
                
            </div>
            

          </div >
             
           
          <div className ={`  top-50 md:flex hidden justify-center items-start w-80 h-96 absolute    bg-teal-600  text-text-black
                           ease-in-out duration-500 ${open ? 'left-0' : 'left-[-200%]'} `}>
               <div className='w-full'>

                    <div className='text-white text-center mt-5 w-full'>
                        {
                            collection.map(col => 
                                <p  key={col._id} className='text-xxl font-semibold w-full hover:bg-yellow-400 p-2'>
                                   <Link onClick={() => setOpen(false)} to={`/collection/${col.category}`}>{col.name}</Link>
                                </p>
                                )
                        }
                       
                    </div>

               </div>
             
          </div>
        <hr className='md:w-full ' />
         </section>
      </main>
    
    );
};

export default Navber;