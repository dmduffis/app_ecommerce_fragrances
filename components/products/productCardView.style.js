import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      width: 175,
      height: 220,
      marginEnd: 5,
      borderRadius: 16,
      backgroundColor: "#DDF0FF",
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
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details: {
        padding: 12,
    },
    title: {
        fontFamily: 'bold',
        fontSize: 17,
        marginBottom: 2,
    },
    supplier: {
        fontFamily: 'regular',
        fontSize: 12,
    },
    price: {
        fontFamily: 'bold',
        fontSize: 17,
    },
    addBtn: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    }
})

export default styles