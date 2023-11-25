import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { palettes } from "../../../utils/palettes";
import { fonts } from "../../../utils/fonts";

const ButtonMain = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.btnStyle]}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonMain;

const style = StyleSheet.create({
  container: {
    backgroundColor: palettes.default.secondary,
    borderWidth: 1,
    borderRadius: 100,
    width: 140,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: palettes.default.white,
    ...fonts.md2,
  },
});
