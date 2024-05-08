import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default fetchCart = () => {

    const { cartCount, setCartCount } = useContext(CartContext);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        
        setLoading(true);

        try {

            const token = await AsyncStorage.getItem('token');
            const id = await AsyncStorage.getItem('id');

            const endpoint = 'http://localhost:3000/api/cart/find';

            const headers = {
                'Content-Type': 'application/json',
                'token': 'Bearer ' + JSON.parse(token)
            };

            const response = await axios.get(endpoint, {headers});
            const cartProducts = response.data[0].products
            
            // await AsyncStorage.setItem('cartCount', JSON.stringify(cartProducts.length))

            setData(cartProducts)

            const productQuantity = () => {
            for (let i = 0; i < cartProducts.length; i++) {
                let quantity = 0;
                quantity += cartProducts[i].quantity
                setCartCount(quantity)
            }
            }

            setLoading(false);
            
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=> {
        fetchData();
    }, []);

    const refetch = ()=> {
        setLoading(true);
        fetchData();
    }


    return {data, loading, error, refetch}


};

