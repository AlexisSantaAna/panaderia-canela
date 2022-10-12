import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {    
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.white
  },
  title: {
    fontSize: 18,
    fontFamily: "Lato-Regular",
    marginVertical: 5,
    textAlign: "center"
  },
  promptButton: {
    alignItems: "center",
  },
  promptMessage: {
    color: colors.primary,
    fontFamily: "Lato-Bold",
    fontSize: 16,
    paddingTop: 12
  },
  buttonsContainer: {
    paddingTop: 10
  }
});
