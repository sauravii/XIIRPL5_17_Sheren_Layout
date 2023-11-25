import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ButtonLine } from "../../atomics";
import { palettes } from "../../../utils/palettes";
import { fonts } from "../../../utils/fonts";

const NavbarMain = (props) => {
  return (
    <View style={[styles.navbarContainer, props.navStyle]}>
      <Text style={styles.mainText}>{props.detailText}</Text>
      <Text style={styles.titleText}>{props.titleText}</Text>
      <View style={styles.containerHorizontal}>
        <View style={styles.amountField}>
          <Text style={styles.detailText}>{props.subText}</Text>
          <Text style={styles.counterText}>{props.amountText}</Text>
        </View>
        <ButtonLine title={props.btnText} onPress={props.onButtonPress} />
      </View>
    </View>
  );
};

export default NavbarMain;

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: palettes.default.primary,
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  mainText: {
    ...fonts.sm1,
    color: palettes.default.detailText,
    marginBottom: 8,
  },
  titleText: {
    ...fonts.lg3,
    color: palettes.default.white,
  },
  detailText: {
    ...fonts.md1,
    color: palettes.default.white,
    marginBottom: 8,
  },
  counterText: {
    ...fonts.md2,
    color: palettes.default.white,
  },
  amountField: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 7,
  },
  containerHorizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
});
