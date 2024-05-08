import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState,  } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './favorites.style';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

export default Favorites = ({navigation}) => {

  const[favData, setFavData] = useState([]);

  useEffect(() => {
    checkFavorites();
  }, [])


  const deleteFavorites = async (product) => {
    const id = await AsyncStorage.getItem('id');
    const favoritesId = `favorites${JSON.parse(id)}`

    let productId = product;


    try {
      const existingItem = await AsyncStorage.getItem(favoritesId);
      let favoritesObject = existingItem ? JSON.parse(existingItem) : {};
      
      if (favoritesObject[productId]) {
        delete favoritesObject[productId];
        checkFavorites();
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
        const favList = Object.values(fav)
        setFavData(favList)
      }
    } catch(error) {
      console.log(error)
    }
  }

    
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.titleRow}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.secondary} 
            />
        </TouchableOpacity>

        <Text style={styles.titleTxt}>Favorites</Text>
       </View>

       <FlatList 
       data={favData}
       renderItem={({ item }) => (
       <View style={styles.favContainer}> 
        <View style={styles.imgContainer}>
          <Image 
          source={{uri: item.imageURL}}
          style={styles.image}/>
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.fav}>{item.title}</Text>
          <Text style={styles.supplier}>{item.supplier}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        
          <SimpleLineIcons 
          onPress={()=> deleteFavorites(item.id)}
          name='trash'
          size={20}
          color={COLORS.red}
          />
       
       </View>)}
       keyExtractor={(item, index) => index.toString()}
       />
    </SafeAreaView>
     
  )
}
