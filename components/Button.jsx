import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../constants/theme'

const Button = ({title, isValid, loading, onPress, cartLength}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={styles.btnStyle(cartLength > 0 ? COLORS.secondary : COLORS.gray)}>
    
    {loading === false ? (
    <Text style={styles.btnTxt}>{title}</Text>
        ) : (
    <ActivityIndicator />
    )}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnTxt: {
        fontFamily: "bold",
        color: COLORS.white,
        fontSize: 18
    },
    btnStyle: (backgroundColor) => ({ 
        backgroundColor: backgroundColor,
        height: 50,
        width: "100%",
        marginVertical: 25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12
    })
})