import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: colors.skin,
        alignItems: "center",
        maxHeight: 80,
        minHeight: 80,
        borderTopWidth: 2,
        borderTopColor: colors.white
    },
    buttonConfirm: {
        fontFamily: "Lato-Bold"
    }
})