import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from "./components/Home/Home"

import Main from "./layouts/Main/Main"
import Block from "./components/Block/Block"
import Order from "./components/Oder/Order"
import Collection from "./components/Collection/Collection"
import Model from "./layouts/Model"
import Cart from "./components/Cart/Cart"
import Login from "./components/Login/Login"
import SignUp from "./components/Login/SignUp"



function App() {
   const router =createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/block',
                element: <Block></Block>
            },
          
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/collection/:category',
                element: <Collection></Collection>
            },
            {
                path: '/cart',
                element:<Cart></Cart>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path :'/signup',
                element : <SignUp></SignUp>
            }
          
           
        ]
    }
   ])

  return (
  <div>
    <RouterProvider
    router={router}
    ></RouterProvider>
    </div>
  )
}

export default App
