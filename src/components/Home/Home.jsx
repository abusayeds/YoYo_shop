import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import api from '../../api';
import image from '../../Image/pik.jpg'
import delivary from '../../Image/delivary.jfif'
import manyBack from '../../Image/many back.png'
import repless from '../../Image/replaess.jfif'
import servise from '../../Image/servise.jpg'
import { Link } from 'react-router-dom';





const Home = () => {
const {openModel,  collection} = useContext(AuthContext)


const [products, setProducts] = useState([])

const [searchItem , setItemSearch] = useState([])
console.log(searchItem);
const [counts ,setcounts] = useState([])
const count = counts.length;

const [page, setPage] = useState(5)
const [size , setsize] =useState(10)
const pages = Math.ceil(count/ size)

  useEffect(() => {
    fetch(`${api}/count`)
     .then(res => res.json())
     .then (data => setcounts(data))
    },[])
     useEffect(() => {
     fetch(`${api}/products?page=${page}&size=${size}`)
      .then(res => res.json())
      .then (data => setProducts(data))
     },[page,size])
     
  
 const hendelSearch = (event) => {
    event.preventDefault()
       const form = event.target
       const v = form.search.value;
        fetch(`${api}/search?name=${v}`)
        .then(res => res.json())
        .then(data => setItemSearch(data) )
        form.reset()
   
 }
    
   

    return (
       <main className='md:p-0 px-2'>
         <div className=' flex  md:p-10   mt-5'>
               <div className=' w-full  md:flex hidden justify-center items-center  '>
                <img className=' h-96 bg-slate-500 ' src={image} alt=""  />
                
               </div>
                  
                <div className=' w-full  flex md:justify-start justify-center items-center  '>
                    <div>
                    <div className=''>
                     <p className=' md:text-5xl text-2xl font-semibold'>Discover World Best <br />Jewelry</p>
                     <p className=' md:text-2xl mt-2'>Bey 10+ Product then discount <span className=' text-red-600 font-bold'>40%</span></p>
                     </div>
                     <form onSubmit={  hendelSearch} className=' mt-4 flex md:w-96 rounded border border-gray-300 focus:outline-none  placeholder-gray-800'>
                    <input className=' focus:outline-none  p-2 md:w-96' name='search' type="text" placeholder='Search product' />
                    <button className=' hover:bg-slate-100 rounded px-2' type="submit"> <FontAwesomeIcon   icon={faSearch}></FontAwesomeIcon></button>
                    </form>
                    <div className='flex gap-5 mt-5'>
                    <button className=' bg-red-500 hover:bg-red-700 py-1 px-2 rounded text-white'> <Link to='/cart'> seen cart</Link></button>
                    <button className='border font-semibold text-violet-600 border-blue-600 py-1 px-2 rounded '>seen wishlist</button>
                    </div>
                    </div>
                </div>
                
         </div>


         <div className=' grid md:grid-cols-4  md:justify-between md:mt-0 mt-5 md:px-10 '>
             <div className='flex md:justify-center items-center mt-1'>
              <div className='flex'>
              <img className='w-10' src={delivary} alt="" />
              </div>
              <div className='ml-2'>
               <p className='  font-semibold'>Fast & Secure Delivery</p>
               <small className=' text-gray-600'>Tell about your service.</small>
              </div>
             </div>
             <div className='flex md:justify-center  items-center mt-1'>
              <div  className=' w'>
              <img className='w-10' src={repless} alt="" />
              </div>
              <div className='ml-2'>
               <p className='  font-semibold'>2 Days Return Policy</p>
               <small className=' text-gray-600'>No question ask.</small>
              </div>
             </div>
             <div className='flex md:justify-center items-center mt-1'>
              <div>
              <img className='w-10' src={manyBack} alt="" />
              </div>
              <div className='ml-2'>
               <p className='  font-semibold'>Money Back Guarantee</p>
               <small className=' text-gray-600'>Within 5 business days</small>
              </div>
             </div>
             <div className='flex md:justify-center items-center mt-1'>
              <div>
              <img className='w-10' src={servise} alt="" />
              </div>
              <div className='ml-2'>
               <p className='  font-semibold'>24 X 7 Service</p>
               <small className=' text-gray-600'>Online service for customer</small>
              </div>
             </div>
            

         </div>
         <div className=' text-center my-10'>
                <p className=' text-4xl'>All Products are hear !!</p>
                <small>This ranges from women and men's outfits to children's clothing, shoes, accessories, and more. <br /> People love their clothes, and fashion isn't going anywhere!</small>
            </div>
        
           {
            searchItem.length === 0 ?
            <section>
          <div className='grid md:grid-cols-5 grid-cols-2 gap-5 md:p-10 p-2 mx-auto '>
            {
             products.map(product => 
            <div className=' rounded border 'key={product._id}>
                  <div className='flex justify-between p-2'>
                    <p>{product.name}</p>
                    <p onClick={() => openModel(product._id)} > <FontAwesomeIcon className='bg-teal-600 hover:bg-teal-700 text-white rounded-full p-2' icon={faShoppingCart}></FontAwesomeIcon> </p>
                   </div>
                   <img className='w-full md:h-72 h-36' src={product.image} alt=""  />
                    <div className='md:flex justify-between items-center p-5'>
                    <p className=''> -{product.price}$ <small><del>100%</del></small></p>
                    <div>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    </div>
                 </div>
              </div>
              
             )
          }
          </div>
          <div className='md:flex justify-center items-center mb-20 '>
            <FontAwesomeIcon className='mr-4' icon={faAngleLeft}> </FontAwesomeIcon>
             {
                 [...Array(pages).keys()].map( num => 
                     <button onClick={() => setPage(num)} className= {`border px-4 py-1 ml-2 rounded ${page === num && "bg-teal-600 text-white font-semibold"}`} key={num}>
                         {num + 1}
                     </button>
                     )
             }
              <div className='flex justify-center items-center'>
              <p className='ml-5'>Data size = </p>
             <select onChange={ event => setsize(event.target.value)} className='border rounded ml-3 focus:outline-none p-1'>
                
                
                 <option value= '10'>15</option>
                 <option  value= '5'>5</option>
                 <option selected   value= '10'>10</option>
                 <option value= '15'>15</option>
              </select>
              </div>
              <FontAwesomeIcon icon={faAngleRight} className='ml-4'> </FontAwesomeIcon>
              </div>
              <div className=' text-center my-10'>
                <p className=' text-4xl'>Top Category Products Of The Site</p>
                <small>This ranges from women and men's outfits to children's clothing, shoes, accessories, and more. <br /> People love their clothes, and fashion isn't going anywhere!</small>
            </div>
           <div className='text-center my-10 w-full grid md:grid-cols-6 grid-cols-2 p-2 md:gap-5 '>
                        {
                            collection.map(col => 
                                <div  key={col._id} className=' z-50 md:space-x-6'>
                                  <button className=' w-28 md:w-32 md:text-xxl mt-2 relative border font-medium border-teal-600 bg-transparent px-6 py-2 rounded md:uppercase text-teal-600 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 md:before:h-full md:before:w-full before:origin-top-left before:scale-x-0 before:bg-teal-600 before:transition-transform before:duration-300  hover:text-white md:before:hover:scale-x-100  '> <Link to={`/collection/${col.category}`}>{col.name}</Link></button>
                                </div>
                                
                                )
                        }
                       
            </div>
            </section>
           :
        //    search product
           <section>
               <div className='grid md:grid-cols-5 grid-cols-2 gap-5 md:p-10 p-2 mx-auto '>
            {
             searchItem.map(product => 
            <div className=' rounded border 'key={product._id}>
                  <div className='flex justify-between p-2'>
                    <p>{product.name}</p>
                    <p onClick={() => openModel(product._id)} > <FontAwesomeIcon className='bg-teal-600 hover:bg-teal-700 text-white rounded-full p-2' icon={faShoppingCart}></FontAwesomeIcon> </p>
                  </div>
                 <img className='w-full md:h-72 h-36' src={product.image} alt=""  />
                 <div className='md:flex justify-between items-center p-5'>
                    <p className=''> -{product.price}$ <small><del>100%</del></small></p>
                    <div>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon className='text-yellow-700' icon={faStar}></FontAwesomeIcon>
                    </div>
                 </div>
              </div>
              
             )
          }
          </div>
           </section>
           }
                
            
           

           
        </main>
    );
};

export default Home;