import React, {  createContext, useEffect, useState } from 'react';
import api from '../../api';
import { Link } from 'react-router-dom';

 export const AuthContext =createContext()


const  Context = ({children}) => {
    const [showModel , setShowModel] = useState()
    const close = () => {setShowModel(false)}
    const openModel = (id) => {
        setShowModel(id)
        return openModel
    }
    const [collection , setCollection] = useState([]);
    useEffect(() => {
        fetch(`${api}/collection`)
         .then(res => res.json())
         .then (data => setCollection(data))
        },[])
//   cart funtion ///////
const [cartItem,setCartItem ] =useState([])

const deleteProduct = (id) => {
    const deleteitem = cartItem.filter(i => i._id !== id)
    setCartItem(deleteitem)
    return deleteProduct
} 
// add product
const cartPtoduct = (cart) => {
     const id =cartItem.find(c => c._id === cart._id  )
      if(id) {
        alert(`This Product already addded,, Please increase your Quantity !!`)
      }
      else{
        const item = [...cartItem, cart]
        setCartItem(item)
      }
   
    return cartPtoduct
}
// add product

// increse && decrease quntity  

   const  hendelDecrease = (cart_id) =>  {
    setCartItem(cartItem => 
        cartItem.map((item) => 
            cart_id === item._id ? { ...item, quantity : parseFloat (item.quantity ) - (item.quantity > 1 ? 1 : 0)} : item
            )
        )
   }
   
   const hendleincrease = (cart_id) => {
    setCartItem(cartItem => 
        cartItem.map((item) => 
            cart_id === item._id ? {...item, quantity : parseFloat(item.quantity )  + (item.quantity < 10 ? 1 : 0)} : item
            )
        )
   }
// increse && decrease quntity 


  
const authinfo = {
    
    collection,showModel,cartItem,
    openModel,close,cartPtoduct,deleteProduct, 
    hendelDecrease,hendleincrease

}

    return (
        <div>
           <AuthContext.Provider value={authinfo} >
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default Context;