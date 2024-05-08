import React from 'react'
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import styles from './productcolumn.style';
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';


export default function ProductColumn() {
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
            vertical
            numColumns={2}
            windowSize={3}
            initialNumToRender={3}
            removeClippedSubviews={true}
            contentContainerStyle={{ rowGap: 10}}
            />)
         }
         </View>
    )
}

