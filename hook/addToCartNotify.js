import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";
import { Toast } from 'toastify-react-native'

export default AddToCartNotify = async (productId, quantity) => {

    const successToast = () => {
        Toast.success('Su producto ha sido agregado al carrito.')
    }

    const errorToast = () => {
        Toast.error('Lo sentimos. El sistema ha experimentado un error. Intente de nuevo.')
    }
    
    try {

        const token = await AsyncStorage.getItem('token');
        const id = await AsyncStorage.getItem('id');
    
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

        successToast();
        
    }

    catch(error) {
        errorToast();
        throw new Error(error.message)
    }
}