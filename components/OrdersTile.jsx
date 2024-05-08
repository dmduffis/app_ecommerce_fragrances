import { Text, View, Image} from 'react-native'
import React from 'react'
import styles from './orderstile.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../constants/theme'


export default OrdersTile = ({item}) => {

    return (
     <TouchableOpacity style={styles.favContainer(COLORS.secondary)}>
        <View style={styles.imgContainer}>
            <Image
            source={{uri: item.productId.imageURL}}
            style={styles.image}
            />
        </View>
        <View style={styles.txtContainer}>
            <Text numberOfLines={1} style={styles.productTxt}>{item.productId.title}</Text>
            <Text numberOfLines={1} style={styles.supplier}>{item.productId.supplier}</Text>
            <Text numberOfLines={1} style={styles.price}>${item.productId.price * item.quantity}    Qty: {item.quantity}</Text>
        </View>
        <View
        style={{paddingLeft: 75}}
        >

            <View  style={styles.payStatus}>
                <Text style={styles.payStatusTxt}>{item.payment_status}</Text>
            </View>

        </View>
     </TouchableOpacity>
    )
}