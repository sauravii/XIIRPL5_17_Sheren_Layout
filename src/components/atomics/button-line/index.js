import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { palettes } from "../../../utils/palettes";
import { fonts } from "../../../utils/fonts";

const ButtonLine = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.btnStyle]}>
      <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLine;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: palettes.default.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  text: {
    color: palettes.default.white,
    ...fonts.md2,
  },
});
