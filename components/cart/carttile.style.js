import { StyleSheet } from "react-native";
import { SIZES, SHADOWS, COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: SIZES.width- 50,
        marginBottom: 12
    },
    titleTxt: {
        fontFamily: 'bold',
        fontSize: SIZES.xLarge,
        letterSpacing: 4,
        marginLeft: SIZES.small
    },
    favContainer: (color) => ({
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: SIZES.xSmall,
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: color,
    }),
    imgContainer: {
        width: 70,
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 65,
        borderRadius: SIZES.small,
        resizeMode: 'cover'
    },
    txtContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium
    },
    productTxt: {
        fontSize: SIZES.medium,
        fontFamily: "bold",
        color: COLORS.primary
    },
    supplier: {
        fontFamily: "regular",
        fontSize: SIZES.small + 2,
        color: COLORS.gray,
        marginTop: 3,
        textTransform: 'capitalize'
    },
   price: {
        fontFamily: "semibold",
        fontSize: SIZES.small + 2,
        color: COLORS.gray,
        marginTop: 3,
   },
   hidden: {
    display: 'none',
   }
    

});

export default styles