import React, { useContext,  useEffect,  useState } from 'react';
import { AuthContext } from '../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




const Cart = () => {
    const { cartItem,deleteProduct,hendelDecrease,hendleincrease } = useContext(AuthContext)
    const [sp, setSp] =useState(50)
    let total = 0
    for(const i of cartItem) {
        const p = parseFloat(i.price)
        const q = parseFloat(i.quantity)
        const tt = p*q

        total = total + tt + sp
    }
  
    return (
        // <div className='md:p-0 px-2 pb-20 z-50'>
        //   <p className='text-gray-400 text-4xl font-semibold text-center'>Shopping Cart !!</p>
        //   {
        //     cartItem.map(item => 
        //     <div className=' md:grid md:grid-cols-2 rounded bg-gray-200  mt-4 md:w-4/6 md:mx-auto p-2 justify-center items-center' key={item._id}>
        //         <div className=' flex items-center justify-around'>
        //             <div className=''>
        //             {/* <p onClick={() => deleteProduct(item._id) }  className=' hover:bg-red-600 px-3 py-1 hover:text-white hover:font-semibold  rounded-full'> <FontAwesomeIcon icon={faTa}></FontAwesomeIcon> </p>
        //              */}
        //               <p onClick={() => deleteProduct(item._id) } className=" px-2 py-1 rounded-full hover:text-red-600 text-red-500 text-xl md:hidden" > <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></p>
        //               <img className='w-20 rounded' src= {item.image} alt=""  />
                 
        //             </div>
        //             <p>{item.name}</p>
                   
        //         </div>
        //         <div className='  md:m-0  md:flex hidden justify-around '>
                
        //         <div className='flex justify-center border  bg-white  items-center'>
        //             <button onClick={() =>hendleincrease (item._id)}  className='px-3 h-full bg-gray-300 hover:bg-gray-400 hover:text-white'>+</button>
        //             <p className='px-6  '>{item.quantity} </p>
        //             <button onClick={() => hendelDecrease (item._id)}  className='px-3 h-full bg-gray-300 hover:bg-gray-400 hover:text-white'>-</button>
                    
        //         </div>
        //         <p> Price  : {item.price} $</p>
        //         <p onClick={() => deleteProduct(item._id) } className="px-2 py-1 rounded-full hover:bg-red-500  hover:text-white text-red-400 text-xl md:block hidden" > <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></p>
        //         </div>
        //         {/* mobil devise */}
        //         <div className=' bg-white p-4 rounded  md:m-0 mt-5 flex md:hidden justify-around '>
                
        //         <div className='flex justify-center border  bg-white  items-center'>
        //             <button onClick={() =>hendleincrease (item._id)}  className='px-3 h-full bg-gray-300 hover:bg-gray-400 hover:text-white'>+</button>
        //             <p className='px-6  '>{item.quantity} </p>
        //             <button onClick={() => hendelDecrease (item._id)}  className='px-3 h-full bg-gray-300 hover:bg-gray-400 hover:text-white'>-</button>
                    
        //         </div>
        //         <p> {item.price} $</p>
        //         </div>
            
        //     </div>  
                
        //         )
        //   }
        //   <hr className='mt-4 md:w-4/6 md:mx-auto' />
         
        // </div>
        <main className=' md:mb-0 mb-20 bg-slate-200 p-10'>
            <section className='  md:w-5/6 m-auto md:flex w-full '>
                <div className=' relative md:w-4/5  bg-slate-50 p-2'>
                    <div className='flex w-full justify-around text-start '>
                        <p className='font-semibold'>Shopping cart</p>
                        <p className='font-semibold'>Total item = {cartItem.length}</p>
                    </div>
                    <hr className='w-full mt-2 ' />
                    <div className='flex w-full justify-around  text-slate-500 mt-5'>
                     <p>Product</p>
                     <p>Quantity</p>
                     <p>Price</p>
                     <p>Remove</p>
                   
                    </div>
                 
                     {
                        cartItem.map(item => 
                          <div  className='  flex w-full justify-around items-center md:mt-4  rounded'>

                             <div className='md:flex w-full md:p-0 p-4 gap-4 items-center'>
                                <img className='w-20 rounded ' src= {item.image} alt=""  />
                                <p className='md:block hidden'>{item.name}</p>
                                <small className='md:hidden '> {item.name}</small>
                             </div> 

                             <div className=' w-full flex justify-center   '>
                                <button onClick={() =>hendleincrease (item._id)}  className='px-2 font-bold  hover:bg-slate-200'>+</button>
                                <p className=' border px-2 '>{item.quantity} </p>
                                 <button onClick={() => hendelDecrease (item._id)}  className='px-2 font-bold  hover:bg-slate-200'>-</button>
                             </div>

                             <div className='w-full text-center'>
                                <p> $ {item.price}</p>
                             </div>
                            
                             <div className='w-full flex justify-center'>
                             <p onClick={() => deleteProduct(item._id) } className=" px-2 py-1 rounded-full hover:text-red-600 text-red-400 text-xl " > <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></p>
                             </div>
                          </div>  
                            
                        )
                     }
                    
                  <p className=' text-teal-600 font-semibold absolute bottom-0'><Link to='/'><FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon> Go Back</Link></p>
                </div>
                <div className='md:w-1/4  p-2  bg-slate-100'>
                    <p className='font-semibold text-center'>Order Summary</p>
                    <hr className='w-full mt-2' />
                    <div className='flex justify-between mt-2'>
                        <p>Items</p>
                        <p>{cartItem.length}</p>
                    </div>
                    <div className='mt-2'>
                        <p>Shipping</p>
                         <div className='bg-white flex justify-between items-center p-2 mt-2'>
                            <small className='text-slate-400'>Delivary - {sp} $</small>
                            <FontAwesomeIcon  icon={faAngleDown} className='text-slate-400' ></FontAwesomeIcon>
                         </div>
                    </div>
                    <div className='mt-2'>
                        <p>Description-Box</p>
                         <input className='w-full mt-2 p-1' type="text" name="" id="" placeholder='Your Description' />
                         <button className='bg-yellow-500 mt-2 px-2 rounded hover:bg-yellow-600 hover:text-white focus:outline-none'>Sent</button>
                    </div>
                   
                    <hr className='w-full mt-2' />
                    <p className='text-end'><small >TOTAL COST = {total} $</small></p>
                     <button className=' py-2 text-white bg-teal-500 rounded hover:bg-teal-600 w-full mt-4'>Confirm purchase</button> 
                </div>
              
            </section>
        </main>
        
    );
};

export default Cart;