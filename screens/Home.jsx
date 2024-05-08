import React, {useContext, useEffect, useState} from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fontisto } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './home.style'; 
import Welcome from '../components/home/Welcome';
import Carousel from '../components/home/Carousel';
import Headings from '../components/home/Headings';
import ProductRow from '../components/products/ProductRow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartContext } from '../context/CartContext';
import fetchCart from '../hook/fetchCart';
import { COLORS } from '../constants/theme';

export default Home = ({navigation}) => {

  const  {data, loading, error, refetch, fetchData} = fetchCart();

  const { cartCount, setCartCount } = useContext(CartContext);

  const [userData, setUserData] = useState(null)
  const [userLogin, setUserLogin] = useState(false)

  useEffect(() => {
    checkExistingUser();
  })

  useEffect(() => {
    let quantity = 0;
    for (let i = 0; i < data.length; i++) {
      quantity += data[i].quantity
      setCartCount(quantity)
  }
  }, [data])


  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('id')
    const userId = `user${(JSON.parse(id))}`;
    
    try {
      const currentUser = await AsyncStorage.getItem(userId)

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser)
        setUserData(parsedData)
        setUserLogin(true)
      }
    } 
    
    catch(error) {
      console.log('Error retrieving data', error)
    }
  };

    return (
      <SafeAreaView>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Ionicons name='location-outline' size={24} />
            <Text style={styles.location}>{userData ? userData.location : "New York, USA"}</Text>
            <View style={{alignItems: 'flex-end'}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>{cartCount}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <SimpleLineIcons name='handbag' size={27} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
          </View>
        </View>
        <ScrollView>
          <Welcome />
          <Carousel/>
          <Headings />
          <ProductRow />
        </ScrollView>
      </SafeAreaView>
    )
  }



