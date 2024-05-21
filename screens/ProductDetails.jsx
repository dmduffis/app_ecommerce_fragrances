import { Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './productDetails.style';
import { useRoute } from '@react-navigation/native';
import {Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto} from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants/theme';
import AddToCart from '../hook/addToCart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebView from 'react-native-webview';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Toast } from 'toastify-react-native'


export default ProductDetails = ({navigation}) => {

  const { cartCount, setCartCount } = useContext(CartContext);

  const successToast = () => {
  Toast.success('Su producto ha sido agregado al carrito.')
}

  const route = useRoute();
  const { item } = route.params;
  const[count, setCount] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favorites, setFavorites] = useState(false)
  const [paymentUrl, setPaymentUrl] = useState('');

  const increaseCount = () => {
    setCount(prevCount => prevCount >= 1 ? prevCount +1 : 1)
  }

  const decreaseCount = () => {
    setCount(prevCount => prevCount > 1 ? prevCount -1 : 1)
  }


  useEffect(() => {
    checkUser();
    checkFavorites();
  }, [])

  const checkUser = async () => {

    try {
      const id = await AsyncStorage.getItem('id');
      if (id !== null) {
        setIsLoggedIn(true)
        console.log('user is logged in')
      }
    }  catch (error) {
      console.log(error)
    }
  }

  const handlePress = () => {
    if(!isLoggedIn) {
      navigation.navigate('Login');
    } else {
      addToFavorites();
    }
  }

  const handleBuy = () => {
    if(!isLoggedIn) {
      navigation.navigate('Login');
    } else {
      createCheckout();
    }
  }

  const handleCart = () => {
    if(!isLoggedIn) {
      navigation.navigate('Login');
    } else {
      AddToCart(item._id, count)
      setCartCount(prevCount => prevCount + count)
      successToast();
    }
  }

  const addToFavorites = async () => {
    const id = await AsyncStorage.getItem('id');
    const favoritesId = `favorites${JSON.parse(id)}`

    let productId = item._id;

    let productObject = {
      title: item.title,
      id: item._id,
      supplier: item.supplier,
      price: item.price,
      imageUrl: item.imageURL,
      product_location: item.product_location
    }

    try {
      const existingItem = await AsyncStorage.getItem(favoritesId);
      let favoritesObject = existingItem ? JSON.parse(existingItem) : {};
      
      if (favoritesObject[productId]) {
        delete favoritesObject[productId];
        setFavorites(false)
      } else {
        favoritesObject[productId] = productObject;
        setFavorites(true)
      }

      await AsyncStorage.setItem(favoritesId, JSON.stringify(favoritesObject));
    }
    
    catch(error) {
      console.log(error)
    }
  }

  const checkFavorites = async () => {
    const id = await AsyncStorage.getItem('id');
    const favoritesId = `favorites${JSON.parse(id)}`;


    try {
      const favoritesObject = await AsyncStorage.getItem(favoritesId);
      if(favoritesObject !== null) {
        const fav = JSON.parse(favoritesObject);

        if (fav[item._id]) {
          setFavorites(true)
        }
      }
    } catch(error) {
      console.log(error)
    }
  }

  const createCheckout = async () => {

    try {
    
    const id = await AsyncStorage.getItem('id');
    // const token = await AsyncStorage.getItem('token');

    const response = await fetch("https://paymentserver-production-7b23.up.railway.app/stripe/create-checkout-session", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'token': 'Bearer ' + JSON.parse(token)
      },
      body: JSON.stringify({
        userId: JSON.parse(id),
        cartItems: [
          {
            name: item.title,
            id: item._id,
            imageUrl: item.imageURL,
            price: item.price,
            cartQuantity: count
          }
        ]
      })
    })
      const{url} = await response.json();
      setPaymentUrl(url)
    }

    catch(error) {
      console.log(error)
    }
  }

  const onNavigationStateChange = (WebViewState) => {
    const {url} = WebViewState;
    if(url && url.includes('checkout-success')) {
      navigation.navigate('Orders')
    } else if (url && url.includes('cancel')) {
      navigation.goBack()
    }
  }

  return (

    <View style={styles.container}>
      {paymentUrl ? (
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
          <WebView 
          source={{uri: paymentUrl}}
          onNavigationStateChange={onNavigationStateChange}
          />
        </SafeAreaView>
      ) : (
        <View style={styles.container}>
          <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='chevron-back-circle' size={30} color={COLORS.secondary}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> handlePress()}>
          <Ionicons name={favorites ? 'heart' : 'heart-outline'} size={30} color={COLORS.secondary}/>
        </TouchableOpacity>
      </View>
      <Image 
      source={{uri: item.imageURL}}
      style={styles.image}
      />

      <View style={styles.details}>
        
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>

        <View style={styles.ratingRow}> 
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map(index => 
              (
              <Ionicons 
              key={index}
              name='star'
              size={24}
              color="gold"
              />))}

              <Text style={styles.ratingText}> (4.8)</Text>

          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increaseCount()}>
              <SimpleLineIcons 
              name='plus'
              size={20} />
            </TouchableOpacity>

            <Text style={styles.ratingText}> {count} </Text>

            <TouchableOpacity onPress={() => decreaseCount()}>
              <SimpleLineIcons 
              name='minus'
              size={20} />
            </TouchableOpacity>
              
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Descripción</Text>
            <Text style={styles.descriptionTxt}>
           {item.description}
            </Text>
        </View>

        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>
            <View style={{flexDirection: "row"}}>
              <Ionicons 
              name="checkmark-circle-outline"
              size={20}
              />
              <Text style={{marginTop: 3}}> {item.supplier}</Text>
              </View>

              <View style={{flexDirection: "row"}}>
              <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={20}
              />
              <Text style={{marginTop: 3}}> Envío Gratis </Text>
              </View>
              
          </View>

        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => handleBuy()} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>Comprar Ahora</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleCart()} style={styles.addToCart}>
            <Fontisto
            name="shopping-bag" size={21} color="#FAFAFC"/>
          </TouchableOpacity>
        </View>
        
      </View>

        </View>
      )
      
    }
    </View>

  )
}
