import React,{ useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from './cart.style';
import { COLORS } from '../constants/theme';
import fetchCart  from '../hook/fetchCart';
import { FlatList } from 'react-native-gesture-handler';
import CartTile from '../components/cart/CartTile';
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebView from 'react-native-webview';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default Cart = ({navigation}) => {

const  {data, loading, error, refetch, fetchData} = fetchCart();
const {cartData, setCartData, subTotal, setSubTotal} = useContext(CartContext);

const [selected, setSelected] = useState(null);
const [select, setSelect] = useState(false)
const[count, setCount] = useState(1);
const [paymentUrl, setPaymentUrl] = useState('');

useEffect(() => {
  setCartData(data);
  subTotalCount();
}, [data])

const cartItems = []

if (cartData !== undefined) {
  cartData.forEach((item) => {
cartItems.push (
  {
    name: item.cartItem.title,
    id: item.cartItem._id,
    image: item.cartItem.imageURL,
    price: item.cartItem.price,
    cartQuantity: item.quantity
}
) 
})
} 

let subTotalCount = () => {
  let subTotalCount = 0;
  for (let i = 0; i < data.length; i++) {
    subTotalCount += (parseFloat(data[i].cartItem.price) * data[i].quantity)
    setSubTotal(subTotalCount)
  }
}

// console.log(cartData);

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
        cartItems
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
      <SafeAreaView style={styles.container}>
          {paymentUrl ? (
        <SafeAreaView style={{flex: 1, backgroundColor: "white", borderRadius: 12 }}>
          <WebView 
          source={{uri: paymentUrl}}
          onNavigationStateChange={onNavigationStateChange}
          />
        </SafeAreaView>) : (<View>
          <View style={styles.titleRow}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.secondary} 
            />
        </TouchableOpacity>

        <Text style={styles.titleTxt}>Carrito</Text>
       </View>

       {loading ? (<ActivityIndicator/>) 
       : (<FlatList
        data={cartData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <CartTile
            item= {item}
            data = {data}
            cartItems = {cartItems}
            refetch = {refetch}
          />
        )}
      />
    )}

      <View style={styles.subtotalWrapper}>
      <Text style={styles.subtotalTxt}>Subtotal</Text>
      <Text style={styles.subtotalNumber}>${subTotal.toFixed(2)}</Text>
      </View>

    
        <Button title={'Checkout'}
        onPress={() => createCheckout()}
        loading={loading}
        cartLength={cartData.length}
        />

      </View>
      )
  } 
</SafeAreaView>

)}
