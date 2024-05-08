import { StyleSheet } from "react-native";
import {COLORS, SIZES, SHADOWS} from "../../constants/theme";

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.small,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#fff", ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite
},
image: {
    width: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    alignItems: "center",
    justifyContent: 'center',
},
productImg: {
    width: "100%",
    height: 65,
    borderRadius: SIZES.small,
    resizeMode: "cover"
},
textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,

},
productTitle: {
    fontSize: SIZES.medium,
    fontFamily: 'bold',
    color: COLORS.primary
},
supplier: {
    fontSize: SIZES.small,
    fontFamily: 'regular',
    color: COLORS.primary,
    marginTop: 3,
},
price: {
    fontSize: SIZES.small,
    fontFamily: 'regular',
    color: COLORS.primary,
    marginTop: 3,
}
})

export default styles