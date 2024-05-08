import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        width: SIZES.width - 44,
        zIndex: 999,
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    details: {
        marginTop: - 20,
        backgroundColor:  COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width - 44,
        top: 20,
    },
    title: {
        fontFamily: 'bold',
        fontSize: 20,
    },

    priceWrapper: {
        backgroundColor: "#DDF0FF",
        borderRadius: SIZES.large,

    },
    price: {
        fontFamily: 'bold',
        fontSize: SIZES.large,
        paddingHorizontal: 10,
    },
    ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width - 10,
        top: 5,
    },
    rating: {
        top: SIZES.large,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: SIZES.large,
    },
    ratingText: {
        color: "#83829A",
        fontFamily: 'medium',
        padding: 5,
    },
    descriptionWrapper: {
        marginTop: SIZES.large * 2,
        marginHorizontal: SIZES.large,
    },
    description: {
        fontFamily: 'medium',
        fontSize: SIZES.large - 2,
        marginBottom: 5,
    },
    descriptionTxt: {
        fontFamily: 'regular',
        fontSize: SIZES.medium - 2,
        textAlign: 'justify',
        marginBottom: SIZES.small,

    },
    location: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#DDF0FF",
        padding: 5,
        borderRadius: SIZES.large,
        marginHorizontal: 12,
    },
    cartRow: {
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width,
    },
    cartBtn: {
        width: SIZES.width * 0.7,
        backgroundColor: "#000",
        padding: SIZES.small/2,
        borderRadius: SIZES.large,
        marginLeft: 12,
    },
    cartTitle: {
        fontFamily: 'bold',
        fontSize: 20,
        color: "#FAFAFC",
        marginLeft: 12,
    },

    addToCart: {
        width: 37,
        height: 37,
        borderRadius: 50,
        margin: SIZES.small,
        backgroundColor: "#000",
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles