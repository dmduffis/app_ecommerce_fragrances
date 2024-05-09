import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

const [cartCount, setCartCount] = useState(0);
const [cartData, setCartData] = useState([]);
const [subTotal, setSubTotal] = useState(0);

return (
    <CartContext.Provider value={{
        cartCount,
        setCartCount,
        cartData,
        setCartData,
        subTotal,
        setSubTotal
    }}>
        {children}
    </CartContext.Provider>
    )
}

export { CartContext, CartProvider }
