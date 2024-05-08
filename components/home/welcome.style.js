import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../constants/index'

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    welcomeTxt: {
        fontFamily: 'bold',
        fontSize: 25,
        marginTop: 10,
        margin: 12,
        color: '#333',
    },
    welcomeTxtSecond: {
        fontFamily: 'bold',
        fontSize: 25,
        marginTop: -10,
        margin: 12,
        color: 'green',
    },
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
        color: "#83829A",
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
    
    
})

export default styles