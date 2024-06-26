import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './carttile.style'
import {SimpleLineIcons} from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import { CartContext } from '../../context/CartContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import addToCart from '../../hook/addToCart'
import decreaseCartItemQuantity from '../../hook/decreaseCartItemQuantity'
import Ionicons from '@expo/vector-icons/Ionicons';

export default CartTile = ({item, onPress, select, cartItems, refetch, data}) => {

    const { setCartData, setCartCount, subTotal, setSubTotal } = useContext(CartContext);
    const[itemQuantity, setItemQuantity] = useState(item.quantity)


    const deleteCartItem = async () => {
        
        try {

            const id = await AsyncStorage.getItem('id');
            const token = await AsyncStorage.getItem('token');
        
            const response = await fetch(`https://fragrance-ecommerce-backend.up.railway.app/api/cart/${item._id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'token': 'Bearer ' + JSON.parse(token)
              }
            })
            cartItems.filter((product) => product._id !== item._id) 
            }
          catch(error) {
            console.log(error)
          }
        }

    return (
     itemQuantity > 0 && <TouchableOpacity style={styles.favContainer(!select ? "#FFF" : COLORS.secondary)} onPress={onPress} >
        <View style={styles.imgContainer}>
            <Image
            source={{uri: item.cartItem.imageURL}}
            style={styles.image}
            />
        </View>
        <View style={styles.txtContainer}>
            <Text numberOfLines={1} style={styles.productTxt}>{item.cartItem.title}</Text>
            <Text numberOfLines={1} style={styles.supplier}>{item.cartItem.supplier}</Text>
            <Text numberOfLines={1} style={styles.price}>${(parseFloat(item.cartItem.price) * itemQuantity).toFixed(2)} <Text style={{fontFamily: 'regular'}}>(e. ${parseFloat(item.cartItem.price)}) </Text> </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
            <TouchableOpacity onPress={() => {
                if (itemQuantity > 1) {
                    decreaseCartItemQuantity(item.cartItem._id, 1); 
                    setItemQuantity(prevQuantity => prevQuantity > 0 ? prevQuantity - 1 : 0);
                    setCartCount(prevCount => prevCount > 0 ? prevCount - 1 : 0)
                    setSubTotal(prevTotal => (prevTotal -= parseFloat(item.cartItem.price)))
                } else {
                    setCartCount(prevCount => prevCount > 0 ? prevCount - 1 : 0)
                    deleteCartItem();
                    setItemQuantity(prevQuantity => prevQuantity > 0 ? prevQuantity - 1 : 0);
                    setSubTotal(prevTotal => (prevTotal -= parseFloat(item.cartItem.price)))
                }
                }
                }>
              
              {itemQuantity === 1?
              
              <Ionicons
              name='trash-outline'
              size={20} />
              
              :<SimpleLineIcons 
              name='minus'
              size={20} />

            }
            </TouchableOpacity>
            
            <Text style={{fontSize: 15}}>{itemQuantity}</Text>
            
            <TouchableOpacity onPress={() => {
                addToCart(item.cartItem._id, 1);
                setItemQuantity(prevQuantity => prevQuantity + 1);
                setCartCount(prevCount => prevCount + 1)
                setSubTotal(prevTotal => (prevTotal += parseFloat(item.cartItem.price)))
                }}>
                <SimpleLineIcons 
              name='plus'
              size={20} />
            </TouchableOpacity>
        </View>
     </TouchableOpacity>)
}