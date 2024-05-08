import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";


const styles = StyleSheet.create({
    container: {
      width: 175,
      height: 220,
      marginEnd: 5,
      borderRadius: 16,
      backgroundColor: "#FFF",
    },
    imageContainer: {
        flex: 1,
        width: 163,
        marginLeft: 6,
        marginTop: 6,
        marginBottom: 6,
        borderRadius: 12,
        overflow: "hidden",
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    details: {
        padding: 12,
    },
    title: {
        fontFamily: 'bold',
        fontSize: 17,
        marginBottom: 2,
        color: COLORS.primary,
    },
    supplier: {
        fontFamily: 'regular',
        fontSize: 12,
    },
    price: {
        fontFamily: 'bold',
        fontSize: 17,
        color: COLORS.primary,
    },
    addBtn: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    }
})

export default styles