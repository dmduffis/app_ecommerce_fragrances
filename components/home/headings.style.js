import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";


const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginHorizontal: 12,

    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    headerTitle: {
        fontFamily: 'semibold',
        fontSize: 20,
        color: COLORS.primary,
    },
})

export default styles