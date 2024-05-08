import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './productCardView.style'
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AddToCart from '../../hook/addToCart'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default ProductCardView = ({item}) => {

const { cartCount, setCartCount } = useContext(CartContext);

const [isLoggedIn, setIsLoggedIn] = useState(false);
const navigation = useNavigation();


useEffect(() => {
  checkUser();
}, [])

const checkUser = async () => {

  try {
    const id = await AsyncStorage.getItem('id');
    if (id !== null) {
      setIsLoggedIn(true)
    }
  }  catch (error) {
    console.log(error)
  }
}

const handlePress = () => {
  if(!isLoggedIn) {
    navigation.navigate('Login');
  } else {
    AddToCart(item._id);
    setCartCount(prevCount => prevCount + 1)
  }
}


  return (
    <TouchableOpacity onPress={() => navigation.navigate ("ProductDetails", {item})}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                source={{uri: item.imageURL}}
                style={styles.image}
                />
            </View>
            <View style={styles.details}>
              <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
              <Text style={styles.supplier} numberOfLines={1}>{item.description}</Text>
              <Text style={styles.price} numberOfLines={1}>${item.price}</Text>
            </View>
            <TouchableOpacity style={styles.addBtn} onPress={() => handlePress()}>
                <Ionicons name='add-circle' size={30} color="#2A4D50"/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}
