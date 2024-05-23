import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";


export default AddToCart = async (productId, quantity) => {
    
    try {

        const token = await AsyncStorage.getItem('token');
        const id = await AsyncStorage.getItem('id');
    
        const endpoint = 'https://fragrance-ecommerce-backend.up.railway.app/api/cart';

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