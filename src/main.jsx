import { StrictMode ,useState, createContext} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './home.jsx';
import Cart from './cart.jsx';
import Shop from './shop.jsx';
import Mens from './mens/mens.jsx';
import Womens from './women/womens.jsx';
import Electronics from './electro/electronics.jsx';

import { createBrowserRouter, RouterProvider } from "react-router";

export const cartcontext = createContext();//contextapi

//always when we have to make a fucntion that is going to use
//in any child compoenent we make it in a main.jsx (parent component)

function Main() {
  const [cart, setcart] = useState([]);

  const add = (item) => {
    //fo checking if the item already exist or not 
    const exist = cart.find((cartitem) => cartitem.id === item.id);
    if (exist) {
      //for updating the item 
      const update = cart.map((cartitem) => {
        if (cartitem.id === item.id) {
          return { ...cartitem, qty: cartitem.qty + 1 };

        }
        return cartitem;
      });
      setcart(update);

    } else {
      //for adding the new item
      setcart([...cart, { ...item, qty: 1 }]);
    }
  }


  const remove = (item) => {
    const exist = cart.find((cartitem) => cartitem.id === item.id);
    if (exist.qty === 1) {
      setcart(cart.filter((cartitem) => cartitem.id !== item.id))
    }
    else {
      setcart(cart.map((cartitem) => cartitem.id === item.id ? { ...exist, qty: exist.qty - 1 } : cartitem));
    }

  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home cart={cart} />,
    },
    {
      path: "/shop",
      element: <Shop add={add} cart={cart} />

    },
    {
      path: "/cart",
      element: <Cart/>
    },
    {path:"/men",
      element:<Mens add={add} cart={cart}/>

    },
    {
      path:"/women",
      element:<Womens add={add} cart={cart}/>
    },
    {
      path:"/elec",
      element:<Electronics add={add} cart={cart}/>
    }
    
  ])
//using contextapi
  return (
    <cartcontext.Provider value={{add,cart,remove}}> 
          <RouterProvider router={router} />
    </cartcontext.Provider>
     

  )
 

}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
