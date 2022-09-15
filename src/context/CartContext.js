import { createContext, useContext, useState } from "react";
import React from "react";

export const CartContext= createContext();

export const CartProvider = ({children}) => {

    const [cartTotal, setCartTotal] = useState(0)

    const [cart, setCart] = useState([]);
    const addItem= (item) => {
        const existInCart = cart.find((prod)=> prod.id===item.id)
        if (existInCart){
            const updateCart =cart.map((prod)=> {
                if (prod.id=== item.id){
                    return {...prod, quantity:prod.quantity+item.quantity}
                }else{
                    return prod
                }
            })
            setCart(updateCart)
        } else{
        setCart([...cart, item])
        }
    }

    const clear= () => {
        setCart([])

    }

    const removeItem= (id) => {
        setCart(cart.filter((prod)=>prod.id!==id))
    }

    const isInCart= (id) => {
        return cart.some((prod)=> prod.id===id)
    }

   
    //cart.reduce((acum, actual)=> acum+actual.quantity, 0);

    return(
        <CartContext.Provider value={{cart, clear, removeItem, isInCart, addItem, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)