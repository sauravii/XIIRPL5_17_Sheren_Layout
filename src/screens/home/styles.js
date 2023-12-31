import { StyleSheet } from "react-native";
import { palettes } from "../../utils/palettes";
import { fonts } from "../../utils/fonts";

export default StyleSheet.create({
  container: {
    backgroundColor: palettes.default.white,
    marginTop: 25,
    flex: 1,
  },
  listContainer: {
    marginHorizontal: 18,
    marginVertical: 25,
    gap: 18,
  },
});
