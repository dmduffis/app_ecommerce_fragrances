import { StyleSheet } from "react-native";
import {COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#DDF0FF",
        marginVertical: 16,
        borderRadius: 16,
        height: 50,
    },
    searchIcon: {
        marginHorizontal: 10,
        color: "#F3F4F8",
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: "#DDF0FF",
        marginRight: 10,
        borderRadius: 12,
    }, 
    searchInput: {
        fontFamily: 'regular',
        width: '100%',
        height: "100%",
        paddingHorizontal: 12,
    },

    searchBtn: {
        width: 50,
        height: "100%",
        color: "#2A4D50",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: "#2A4D50",
    },
    cameraIcon: {
        marginHorizontal: 10,
        color: "#aaa"
    },
    searchImage: {
        resizeMode: "contain",
        width: SIZES.width - 50,
        height: SIZES.height - 200,
        opacity: 0.9
    }
})

export default styles