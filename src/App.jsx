import React, {useEffect} from "react";
import  { RouterProvider } from 'react-router-dom';
import {routes} from './router';
import { CartProvider } from "react-use-cart";
 


function App() {
  return  <>
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  </>
}

export default App;
