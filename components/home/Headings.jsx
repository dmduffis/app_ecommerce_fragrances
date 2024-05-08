import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './headings.style'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default Headings = () => {

  const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Popular Stays</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Products')}>
              <Ionicons name='ios-grid' size={24} color="#2A4D50" />
            </TouchableOpacity>
        </View>
      </View>
    )
}

