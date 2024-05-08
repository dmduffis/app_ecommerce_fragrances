import React from 'react'
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import styles from './productrow.style';
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';


export default function ProductRow() {
    const {data, isLoading, error} = useFetch()
    return (
        <View style={styles.container}>
        {isLoading ? (
            <ActivityIndicator size={24} color="#2A4D50" />
        ): error ? (
            <Text>Something went wrong...</Text>
        ): (<FlatList 
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => (<ProductCardView item={item}/>) }
            horizontal
            windowSize={2}
            initialNumToRender={2}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            contentContainerStyle={{columnGap: 15 }}
            />)
         }
         </View>
    )
}



