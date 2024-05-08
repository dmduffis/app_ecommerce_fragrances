import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../constants/theme'

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    welcomeTxt: {
        fontFamily: 'bold',
        fontSize: 24,
        marginTop: 10,
        margin: 12,
        color: COLORS.primary
    },
    welcomeTxtSecond: {
        fontFamily: 'bold',
        fontSize: 30,
        marginTop: -10,
        margin: 12,
        color: COLORS.secondary,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#FFF",
        marginVertical: 16,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
        height: 50,
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.primary,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: "#FFF",
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