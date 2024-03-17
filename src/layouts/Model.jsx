import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/Context/Context';
import api from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Model = () => {
    const{showModel,close, cartPtoduct, } =useContext(AuthContext)
    if(!showModel) return null
    const [modelProduct, setModelProduct] =useState([])
    useEffect(() => {
        fetch(`${api}/products/${showModel}`)
        .then(res => res.json())
        .then(data =>
         setModelProduct(data))
    },[])
    return (
        <div  className='fixed inset-0 bg-black bg-opacity-30 md:p-0 px-2 py-4   backdrop-blur-sm flex  '>
            <div className=' relative md:flex justify-between items-center gap-5 md:w-4/6 m-auto rounded z-50 bg-white md:p-2 pt-5 '>
            <div className='md:flex hidden'>
            <img className='md:h-96 w-96 rounded' src={modelProduct.image} alt=""  />
            </div>
            <div className='md:p-5 p-2'>
                 <p> <span className='font-semibold text-2xl'>Details</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum.</p>
             
                 <div className=' mt-4 flex items-center gap-2'>
                   <div>
                   <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-yellow-700 ' icon={faStar}></FontAwesomeIcon>
                    
                   </div>
                    < small className='  text-yellow-700'> ** 4.5 /</small>
                    <span className='text-teal-600'>stock : <small className='text-red-600'>available</small></span>
                    </div>
          
                <p className=' mt-4 text-xl font-semibold' > $ {modelProduct.price}.00 </p>
                <small className='mt-2 md:flex hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque velit eveniet dignissimos ad, illum cupiditate ut ea voluptates quia blanditiis?</small>
               <div className='mt-4 border md:border-none p-2 md:p-0 flex justify-between items-center'>
                <div className='md:hidden '>
                    <img className='w-20' src={modelProduct.image} alt="" />
                </div>
                <div className='  top-0'>
                <p className='mt-5'>Name  :  <small className='md:ml-20 '>{modelProduct.name}</small></p>
                <p>Rating : <small className='md:ml-20 '>{modelProduct.rating} * *</small></p>
                <p>Brand  : <small className='md:ml-20 '>Reebook</small></p>
         
                </div>
               </div>
                <hr className='md:mt-2' />
                <div className='flex '>
                    <div>
                        <p  className='text-gray-400'>size</p>
                        <button className='border px-2 text-xl mt-2 w-36'>+</button>
                    </div>
                    <div className='ml-5'>
                        <p className='text-gray-400'>Quantity</p>
                        {/* <button onClick={() => increaseQuantity()} className='border hover:bg-red-600 hover:text-white px-2 text-xl mt-2 '>+</button>
                        <button className='border px-2 text-xl'>{quantity}</button>
                        <button onClick={() => DeincreaseQuantity()} className='border hover:bg-teal-600 hover:text-white px-2 text-xl'>-</button> */}
                    </div>
                </div>
                <div className='flex'>
                <p onClick={() => close()}><button onClick={() => cartPtoduct(modelProduct)}className='bg-teal-500 rounded py-1 hover:bg-teal-600 text-white px-2 mt-4'> <FontAwesomeIcon  icon={faShoppingCart }></FontAwesomeIcon> Add to cart </button></p>
                <button className='bg-yellow-500 rounded py-1 hover:bg-yellow-600 text-white px-2 ml-6 mt-4'> <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> Save </button>
                </div>
            </div>
            <p onClick={() => close()} className='hover:bg-red-600 rounded bg-red-500 absolute top-0 right-0 px-3 py-1  text-white font-bold'>X</p>
            </div>
         </div>
        
 
    );
};

export default Model;