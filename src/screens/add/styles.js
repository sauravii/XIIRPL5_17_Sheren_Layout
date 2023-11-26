import { StyleSheet } from "react-native";
import { palettes } from "../../utils/palettes";
import { fonts } from "../../utils/fonts";

export default StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginVertical: 30,
    flex: 1,
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 20,
  },
  btnLineStyle: {
    flex: 1,
    borderColor: palettes.default.secondary,
  },
  textStyle: {
    color: palettes.default.secondary,
  },
});
