import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { palettes } from "../../../utils/palettes";
import { fonts } from "../../../utils/fonts";

const InputTextIcon = (props) => {
  return (
    <View style={styles.inputStyle}>
      <TextInput placeholder={props.placeholder} secureTextEntry={props.secureText} placeholderTextColor="#AAAAAA" />
      {props.customRightIcon && <View>{props.customRightIcon}</View>}
    </View>
  );
};

export default InputTextIcon;

const styles = StyleSheet.create({
  inputStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: palettes.default.stroke,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
