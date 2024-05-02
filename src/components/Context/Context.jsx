import React, {  createContext, useEffect, useState } from 'react';
import api from '../../api';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.Config';

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


// sign in methods
const [user ,setUser] = useState(null)

const auth = getAuth(app)
 const hendelgooglesignin = (provider ,navigete ,location) =>{
   signInWithPopup(auth,provider)
   .then( result => {
    const user = result.user
    navigete( location?.state ? location?.state : '/')
   })
  
   .catch(error => console.error('error' , error))
    return hendelgooglesignin
 }

 const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
 }
 const signup = (email,password) => {
    return signInWithEmailAndPassword(auth ,email, password)
     
   }

 const logOut = () => {
       signOut(auth)
       .then(() => {
        setUser(null)
       })
       .catch(() => {
        setUser(null)
       })
 }
 useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser)
        return () => unSubscribe()
    })
},[])

// console.log(user);
// sign in methods

// search filed
const  [search , setSearch] = useState()
const authinfo = {
    
    collection,showModel,cartItem,
    openModel,close,cartPtoduct,deleteProduct, 
    hendelDecrease,hendleincrease,
    setSearch,search,
    
    // sign in funtion
    user,
    hendelgooglesignin, logOut,createUser,signup
    // sign in funtion

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