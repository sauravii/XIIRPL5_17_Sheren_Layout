import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { palettes } from "../../../utils/palettes";
import { fonts } from "../../../utils/fonts";

const ButtonLine = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.btnStyle]}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLine;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: palettes.default.white,
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
