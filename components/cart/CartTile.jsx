import { Text, View, Image} from 'react-native'
import React, { useEffect } from 'react'
import styles from './carttile.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import fetchCart from '../../hook/fetchCart'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default CartTile = ({item, onPress, select, cartItems, loading}) => {

    const { cartData, setCartData } = useContext(CartContext);
    const { data } = fetchCart();

    const deleteCartItem = async () => {

        try {
    
            const token = await AsyncStorage.getItem('token');
            const id = await AsyncStorage.getItem('id');
        
            const endpoint = `http://localhost:3000/api/cart/${item._id}`;
    
            const headers = {
                'Content-Type': 'application/json',
                'token': 'Bearer '+ JSON.parse(token)
            }
    
            await axios.delete(endpoint, {headers})
            
            cartItems.filter((product) => product.id !== item.id)

            fetchCart();

        }
    
        catch(error) {
            throw new Error(error.message)
        }

        useEffect(() => {
            setCartData(data);
        }, [])
    }

    return (
     <TouchableOpacity style={styles.favContainer(!select ? "#FFF" : COLORS.secondary)} onPress={onPress}>
        <View style={styles.imgContainer}>
            <Image
            source={{uri: item.cartItem.imageURL}}
            style={styles.image}
            />
        </View>
        <View style={styles.txtContainer}>
            <Text numberOfLines={1} style={styles.productTxt}>{item.cartItem.title}</Text>
            <Text numberOfLines={1} style={styles.supplier}>{item.cartItem.supplier}</Text>
            <Text numberOfLines={1} style={styles.price}>${(item.cartItem.price * item.quantity).toFixed(2)}    Qty: {item.quantity}</Text>
        </View>
        <TouchableOpacity
        style={{paddingLeft: 75}}
        onPress={() => deleteCartItem()}>

            <AntDesign
            name="delete"
            size={18}
            color={COLORS.red}
            />

        </TouchableOpacity>
     </TouchableOpacity>
    )
}