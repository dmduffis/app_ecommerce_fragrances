import { StyleSheet } from "react-native";
import {COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    cover: {
        height: 200,
        width: "100%",
        resizeMode: "cover"
    },
    profileContainer: {
        flex: 1,
        alignItems: "center"
    },
    profile: {
        height: 155,
        width: 155,
        borderRadius: 999,
        borderColor: COLORS.primary,
        borderWidth: 1,
        resizeMode: "cover",
        marginTop: -90,
    },
    name: {
        fontFamily: "bold",
        color: COLORS.primary,
        marginVertical: 10
    },
    loginBtn: {
        backgroundColor: COLORS.tertiary,
        padding: 2,
        borderRadius: SIZES.xxLarge
    },
    menuText: {
        fontFamily: "regular",
        color: COLORS.gray,
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 26
    },
    menuWrapper: {
        marginTop: SIZES.xLarge,
        width: SIZES.width-SIZES.large,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12
    },
    menuItem: (borderBottomWidth) => ({
        borderBottomWidth: borderBottomWidth,
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderColor: COLORS.gray
    })

})

export default styles