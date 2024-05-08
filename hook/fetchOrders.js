import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState, useEffect } from "react";

export default fetchOrders = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        

        try {
            const token = await AsyncStorage.getItem('token');
            const id = await AsyncStorage.getItem('id');
            
            const endpoint = `http://localhost:3000/api/orders`;

            const headers = {
                'Content-Type': 'application/json',
                'token': 'Bearer ' + JSON.parse(token)
            };

            const response = await axios.get(endpoint, { headers });

            setData(response.data)

            setLoading(false);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=> {
        fetchData();
    },[]);

    const refetch = ()=> {
        setLoading(true);
        fetchData();
    }


    return {data, loading, error, refetch}


};

