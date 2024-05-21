import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './orders.style';
import { TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
import fetchOrders from '../hook/fetchOrders';
import OrdersTile from '../components/OrdersTile';

export default Orders = ({navigation}) => {

    const {data, loading, error, refetch} = fetchOrders();

    console.log(data)

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

       <Text style={styles.titleTxt}>Pedidos</Text>
      </View>

      {loading ? (<ActivityIndicator />) 
      : (<FlatList 
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => 
           <OrdersTile
            item={item} 
           />}
      />)}

    </SafeAreaView>
)}