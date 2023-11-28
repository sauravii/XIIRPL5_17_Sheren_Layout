import { StyleSheet } from "react-native";
import { palettes } from "../../utils/palettes";
import { fonts } from "../../utils/fonts";

export default StyleSheet.create({
  container: {
    backgroundColor: palettes.default.white,
    marginTop: 25,
    height: "100%",
    paddingHorizontal: 18,
  },
  titleStyle: {
    ...fonts.lg3,
    textAlign: "center",
    marginVertical: 32,
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});
