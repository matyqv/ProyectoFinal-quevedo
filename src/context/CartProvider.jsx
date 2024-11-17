import { useState, useEffect } from 'react';
import { cartContext } from './cartContext.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addToCart = newItem => {
        const itemRepetido = cart.findIndex(item => item.id === newItem.id);

        if (itemRepetido === -1) {
            newItem.subtotal = newItem.price * newItem.qty
            setCart([...cart, newItem]);
            notify("Has agregado un producto al Carrito!")

        } else {
              ModifyCart(newItem,cart[itemRepetido].qty)
              notify("Ese producto ya estaba en tu carrito, hemos agregado mas unidades al Carrito!")
        }
    };

    const ModifyCart = (newItem,oldQty)=> { 
        const updatedCart = cart.map(item => {
        if (item.id === newItem.id) {        
          return {
            

            ...item,
            qty: oldQty + newItem.qty,  
            subtotal: (oldQty + newItem.qty) * item.price 
          };
        }


        return item;
      });
    
      setCart(updatedCart);
    };

    const removeToCart = itemToRemove => {

        setCart((prevCart) => prevCart.filter((item) => item.id !== itemToRemove.id));
    };

    const ClearCart =()=>{
        const arraynew=[]
        setCart(arraynew)
    }


    const notify = (msj) => toast(msj);
    

    return (
        <cartContext.Provider value={{ cart, addToCart, removeToCart ,ModifyCart,ClearCart,notify}}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;
