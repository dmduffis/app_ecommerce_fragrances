import { StyleSheet } from "react-native";
import { SIZES, SHADOWS, COLORS } from "../constants/theme";

const styles = StyleSheet.create({
    container: {
    flex: 1,
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
    favContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: SIZES.xSmall,
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: '#FFF',
        ...SHADOWS.medium,
        shadowColor: COLORS.secondary
    },
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
    subtotalWrapper: {
        paddingTop: 20,
        display: 'flex',
    },
    subtotalTxt: {
        textAlign: 'right',
        fontFamily: 'semibold',
        fontSize: 16,
        color: COLORS.gray,
    },
    subtotalNumber: {
        textAlign: 'right',
        fontFamily: 'semibold',
        fontSize: 22,
        color: COLORS.primary
    }
});

export default styles