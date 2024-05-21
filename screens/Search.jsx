import React, {useState} from 'react'
import { TextInput, TouchableOpacity, View, Image, Text, FlatList, SafeAreaView } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import styles from './search.style'
import axios from 'axios';
import SearchTile from '../components/products/SearchTile';

export default Search = () => {

  const[searchKey, setSearchKey] = useState("");
  const[searchResults, setSearchResults] = useState([]);

  const handlePress = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/search/${searchKey}`)
        setSearchResults(response.data)
      } catch (error) {
        console.log('Estamos experimentando un problema.', error)
      }
  }

  const navigation = useNavigation();

    return (
      <SafeAreaView>
        <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.searchInput}
          value={searchKey}
          onChangeText={setSearchKey}
          placeholder='Que producto estás buscando?'
          />
        </View>
        <View>
      <TouchableOpacity style={styles.searchBtn} onPress={() => handlePress()}>
      <Feather name="search" size={23} style={styles.searchIcon}/>
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


