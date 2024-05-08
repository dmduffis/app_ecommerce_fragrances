import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './welcome.style'
import { COLORS } from '../../constants'
import { Feather, Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


export default Welcome = () => {

  const navigation = useNavigation();

    return (
     <View>
       <View style={styles.container}>
        <Text style={styles.welcomeTxt}>{""} Find The Most </Text>
        <Text style={styles.welcomeTxtSecond}>{""} Luxurious Destinations </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.searchInput}
          value=''
          onPressIn={() => navigation.navigate ("Search")}
          placeholder='what are you looking for?'
          />
        </View>
        <View>
      <TouchableOpacity style={styles.searchBtn}>
        <Ionicons name='camera-outline' size={24} color="#F3F4F8"/>
      </TouchableOpacity>
      </View>
      </View>      
     </View>
    )
  }

