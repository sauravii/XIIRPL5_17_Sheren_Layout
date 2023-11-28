import { StyleSheet } from "react-native";
import { palettes } from "../../utils/palettes";
import { fonts } from "../../utils/fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 18,
    paddingTop: 100,
    backgroundColor: palettes.default.white,
  },
  logo: {
    width: 70,
    height: 70,
  },
  headerContainer: {
    marginVertical: 20,
  },
  titleStyle: {
    ...fonts.lg4,
    color: palettes.default.textTitle,
  },
  subtitleStyle: {
    ...fonts.md1,
    color: palettes.default.textSecondary,
  },
  textDisable: {
    ...fonts.sm1,
    color: palettes.default.textSecondary,
  },
  forgotPass: {
    alignItems: "flex-end",
    marginTop: 8,
  },
});
