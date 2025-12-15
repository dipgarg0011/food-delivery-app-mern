import { createContext,  useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null)

const StorecontextProvider = (props) =>{

    const [cartItems, setCartItems] = useState({})

    const addToCart =(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
        }
    }

    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
    }
    
    const getCartTotal =()=>{
        let total =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item)
                total += itemInfo.price * cartItems[item];
            }
        }
        return total;
    }

    const contextValue ={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getCartTotal
    }
    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}

        </Storecontext.Provider>
    )
}
export default StorecontextProvider