import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    height: 180,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
  },
  text: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
  },
  button: {
    paddingTop: 10
  }
});
