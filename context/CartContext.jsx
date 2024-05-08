import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

const [cartCount, setCartCount] = useState(0);
const [cartData, setCartData] = useState([]);

return (
    <CartContext.Provider value={{
        cartCount,
        setCartCount,
        cartData,
        setCartData
    }}>
        {children}
    </CartContext.Provider>
    )
}

export { CartContext, CartProvider }
