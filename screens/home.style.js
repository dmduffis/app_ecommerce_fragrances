import { StyleSheet } from 'react-native'
import {COLORS, SIZES} from "../constants/theme"

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'bold',
        fontSize: 40,
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: 12,
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    location: {
        fontFamily: 'semibold',
        fontSize: 16,
        color: "#83829A",
    },
    cartCount: {
        position: 'absolute',
        bottom: 16,
        width: 17,
        height: 17,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: COLORS.red,
        justifyContent: 'center',
        zIndex: 999,
    },
    cartNumber: {
        fontFamily: 'semibold',
        fontWeight: "800",
        fontSize: 11,
        color: "#F3F4F8",
    },
})

export default styles
