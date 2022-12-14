import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "Lato-Regular",
    marginBottom: 10,
  },
  helperText: {
    fontFamily: "Lato-Bold",
    fontSize: 12,
    color: "red"
  }
});
