import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Cart } from "../screens";


export default AddToCart = async (productId, quantity) => {
    
    try {

        const token = await AsyncStorage.getItem('token');
        const id = await AsyncStorage.getItem('token');
    
        const endpoint = 'http://localhost:3000/api/cart';

        const data = {
            cartItem: productId,
            quantity: quantity
        }

        const headers = {
            'Content-Type': 'application/json',
            'token': 'Bearer '+ JSON.parse(token)
        }

        await axios.post(endpoint, data, {headers})
    }

    catch(error) {
        throw new Error(error.message)
    }
}