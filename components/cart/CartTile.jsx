import { Text, View, Image} from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import styles from './carttile.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../../constants/theme'
import { CartContext } from '../../context/CartContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import addToCart from '../../hook/addToCart'
import decreaseCartItemQuantity from '../../hook/decreaseCartItemQuantity'

export default CartTile = ({item, onPress, select, cartItems, refetch, data}) => {

    const { setCartData, setCartCount } = useContext(CartContext);
    const[itemQuantity, setItemQuantity] = useState(item.quantity)

    const deleteCartItem = async () => {
        
        try {

            const id = await AsyncStorage.getItem('id');
            const token = await AsyncStorage.getItem('token');
        
            const response = await fetch(`http://localhost:3000/api/cart/${item._id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'token': 'Bearer ' + JSON.parse(token)
              }
            })

            cartItems.filter((product) => product._id !== item._id) 
            refetch();
            setCartData(data);
            }
          catch(error) {
            console.log(error)
          }
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
            <Text numberOfLines={1} style={styles.price}>${(item.cartItem.price * itemQuantity).toFixed(2)}</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
            <TouchableOpacity onPress={() => {
                if (itemQuantity > 1) {
                    decreaseCartItemQuantity(item.cartItem._id, 1); 
                    setItemQuantity(prevQuantity => prevQuantity - 1);
                    setCartCount(prevCount => prevCount -1)
                } else {
                    deleteCartItem();
                    setCartCount(prevCount => prevCount -1)
                }
                }
                }>
                <Text>-</Text>
            </TouchableOpacity>
                    <Text>{itemQuantity}</Text>
            <TouchableOpacity onPress={() => {
                addToCart(item.cartItem._id, 1);
                setItemQuantity(prevQuantity => prevQuantity + 1);
                setCartCount(prevCount => prevCount + 1)
                }}>
                <Text>+</Text>
            </TouchableOpacity>
        </View>
     </TouchableOpacity>
    )
}