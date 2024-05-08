import React, {useState} from 'react'
import { TextInput, TouchableOpacity, View, Image, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import styles from './search.style'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import SearchTile from '../components/products/SearchTile';

export default Search = () => {

  const[searchKey, setSearchKey] = useState("");
  const[searchResults, setSearchResults] = useState([]);

  const handlePress = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/search/${searchKey}`)
        setSearchResults(response.data)
      } catch (error) {
        console.log('failed to get products', error)
      }
  }

  const navigation = useNavigation();

    return (
      <SafeAreaView>
        <View style={styles.searchContainer}>
        <TouchableOpacity>
        <Ionicons name='camera-outline' size={24} style={styles.cameraIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.searchInput}
          value={searchKey}
          onChangeText={setSearchKey}
          placeholder='what are you looking for?'
          />
        </View>
        <View>
      <TouchableOpacity style={styles.searchBtn} onPress={() => handlePress()}>
      <Feather name="search" size={24} style={styles.searchIcon}/>
      </TouchableOpacity>
      </View>
      </View> 
      {searchResults.length === 0 ? (
        <View style={{flex: 1}}>
          <Image
          source={require('../assets/images/Pose23.png')}
          style={styles.searchImage} 
          />
        </View>
      ) : (
        <FlatList
        data={searchResults}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (<SearchTile item = {item} />)}
        style={{marginHorizontal: 12}}
        />
      )}
      </SafeAreaView>
    )
  }


