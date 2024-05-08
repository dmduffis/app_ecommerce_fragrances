import { Text, View, Image} from 'react-native'
import React from 'react'
import styles from './carttile.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'


export default CartTile = ({item, onPress, select}) => {

    return (
     <TouchableOpacity style={styles.favContainer(!select ? "#FFF" : COLORS.secondary)} onPress={onPress}>
        <View style={styles.imgContainer}>
            <Image
            source={{uri: item.cartItem.imageURL}}
            style={styles.image}
            />
        </View>
        <View style={styles.txtContainer}>
            <Text numberOfLines={1} style={styles.productTxt}>{item.cartItem.title}</Text>
            <Text numberOfLines={1} style={styles.supplier}>{item.cartItem.supplier}</Text>
            <Text numberOfLines={1} style={styles.price}>${(item.cartItem.price * item.quantity).toFixed(2)}    Qty: {item.quantity}</Text>
        </View>
        <TouchableOpacity
        style={{paddingLeft: 75}}
        onPress={() => {}}>

            <AntDesign
            name="delete"
            size={18}
            color={COLORS.red}
            />

        </TouchableOpacity>
     </TouchableOpacity>
    )
}