import { StyleSheet } from "react-native";
import {COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#FFF",
        marginVertical: 16,
        borderRadius: 30,
        marginRight: 10,
        marginLeft: 10,
        height: 50,
    },
    searchIcon: {
        marginHorizontal: 10,
        color: '#FFF',
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: "#FFF",
        marginRight: 10,
        borderRadius: 30,
    }, 
    searchInput: {
        fontFamily: 'regular',
        width: '100%',
        height: "100%",
        paddingHorizontal: 12,
    },

    searchBtn: {
        width: 45,
        height: 45,
        color: "#2A4D50",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginRight: 5,
        backgroundColor: COLORS.secondary,
    },
    searchImage: {
        resizeMode: "contain",
        width: SIZES.width - 50,
        height: SIZES.height - 200,
        opacity: 0.9
    }
})

export default styles